export let generatorFunctionConstructor: Function;
const evalCode = '(() => function*(){})().constructor';
try {
    generatorFunctionConstructor = eval(evalCode);
} catch (e) {
    // ignore
}