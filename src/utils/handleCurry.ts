function handleCurry(args: any[], fn: Function, valueIndex: number) {
    valueIndex = valueIndex === void 0 ? 1 : valueIndex;
    return args.length > valueIndex ? fn.apply(this, Array.prototype.slice.call(args, valueIndex)) : fn;
}

export default handleCurry;