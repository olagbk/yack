function yack(fn, ...args) {

    if (args.length >= fn.length) {
        args.length = fn.length;
        return fn(...args);
    }


    return function(...params) {
        return yack(fn, ...args.concat(params));
    }
}
