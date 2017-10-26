export function multiplyNumbers(...args) {
    return args.reduce((acc, item) => (
        item * acc
    ), 1)
}
