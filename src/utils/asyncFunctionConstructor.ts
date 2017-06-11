export let asyncFunctionConstructor: Function;
const evalCode = '(() => async function() {})().constructor';
try {
    asyncFunctionConstructor = eval(evalCode);
} catch (e) {
    // ignore
}