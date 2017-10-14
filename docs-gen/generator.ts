import {default as Ast, ExportDeclaration, FunctionDeclaration, SignaturedDeclaration} from "ts-simple-ast";
import {parse as parseJSDoc, type} from 'doctrine';
import NameExpression = type.NameExpression;
import {readFileSync} from 'fs';
import {resolve} from 'path';

const Handlebars = require('handlebars');

interface PredicateEntry {
    name: string;
    declarations: string[],
    aliases: string[],
    examples?: { caption?: string, body: string }[],
    throws?: { type: string, description: string }[],
    description: string
}

interface HelperEntry {
    name: string,
    declarations: string[],
    examples?: { caption?: string, body: string }[],
    description: string
}

function getMetaInfo() {
    const allEntries: PredicateEntry[] = [];
    const helpers: HelperEntry[] = [];
    const ast = new Ast();
    ast.addSourceFiles('./src/index.ts');

    for (const exp of ast.getSourceFile('src/index.ts').getExports()) {
        if (isPredicateExport(exp)) {
            const [name, ...aliases] = exp.getNamedExports()
                .map(e => e.getAlias() ? e.getAlias().getText() : e.getName().getText());

            allEntries.push({
                aliases,
                ...getDocEntryForModule(name, getModulePath(exp.getModuleSpecifier()))
            });
        } else {
            helpers.push(...getHelpersDocumentation('is.', getModulePath(exp.getModuleSpecifier())))
        }

    }

    return {
        predicates: allEntries,
        predicatesNames: allEntries.reduce((result, p) => {
            return result.concat([p.name, ...p.aliases]);
        }, [])
            .sort((a, b) => {
                return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
            }),
        helpers
    };

    function isPredicateExport(exp: ExportDeclaration) {
        return exp.getNamedExports().some(e => e.getAlias() !== undefined);
    }

    function getModulePath(moduleName: string) {
        return 'src/' + moduleName.replace('./', '') + '.ts'
    }

    function getDocEntryForModule(name: string, module: string) {
        return <PredicateEntry>{
            name,
            ...getModuleData('is.' + name, module),
        }
    }

    function getHelpersDocumentation(prefix: string, modulePath: string) {
        ast.addSourceFiles(modulePath);

        const file = ast.getSourceFile(modulePath);

        return file.getFunctions()
            .map(f => {
                const funcName = prefix + f.getName();
                return <HelperEntry>{
                    name: f.getName(),
                    ...getDataForFunction(funcName, f)
                }
            })
    }

    function getModuleData(forcedFunctionName: string, modulePath: string) {
        ast.addSourceFiles(modulePath);

        const file = ast.getSourceFile(modulePath);
        const func = file.getFunctions()[0];
        if (!func) {
            return [];
        }

        return getDataForFunction(forcedFunctionName, func);
    }

    function getDataForFunction(name: string, func: FunctionDeclaration) {
        return {
            declarations: [
                ...func.getOverloads().map(o => getFunctionDefinition(name, o)),
                getFunctionDefinition(name, func)
            ],

            ...getJsDocData(func)
        }
    }

    function getFunctionDefinition(name: string, func: FunctionDeclaration) {
        return [
            name,
            ...getTypeParamsString(func),
            '(',
            func.getParameters().map(p => p.getText()).join(', '),
            ') => ',
            func.getReturnType().getText()
        ].join('');
    }

    function getTypeParamsString(func: FunctionDeclaration) {
        const typesParams = func.getTypeParameters();
        if (typesParams.length) {
            return [
                [
                    '<',
                    typesParams.map(p => p.getText()).join(', '),
                    '>'
                ].join('')
            ]
        }
        return [];
    }

    function getJsDocData(func: FunctionDeclaration) {
        const docComment = [
            ...func.getDocumentationCommentNodes().map(n => n.getText()),
            ...func.getOverloads()
                .reduce((target, n) => {
                    target.push(...n.getDocumentationCommentNodes().map(n => n.getText()))
                    return target;
                }, [])
        ]
            .filter(x => x)[0];

        if (docComment) {
            const parsed = parseJSDoc(docComment, {unwrap: true});

            return {
                description: parsed.description,
                throws: parsed.tags.filter(t => t.title === 'throws')
                    .map(t => ({
                        type: (<NameExpression>t.type).name,
                        description: t.description
                    })),
                examples: parsed.tags.filter(t => t.title === 'example')
                    .map(t => ({
                        caption: (<any>t).caption,
                        body: t.description
                    }))
            }
        }
        return {};
    }
}

Handlebars.registerHelper('toLowerCase', (o) => {
    return o.toLowerCase();
});

// getMetaInfo();
// console.log(getMetaInfo().predicates);
process.stdout.write(
    Handlebars.compile(readFileSync(resolve(__dirname, './template.md.hbs'), 'utf8'))(getMetaInfo())
);
