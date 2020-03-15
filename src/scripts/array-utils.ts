export function update<T>(array: Array<T>, i: number, newValue: T) {
    array.splice(i, 1, newValue)
}

export function remove<T>(array: Array<T>, i: number): T {
    return array.splice(i, 1)[0]
}

export function push<T>(array: Array<T>, value: T) {
    array.push(value)
}

export function pop<T>(array: Array<T>): T {
    return remove(array, array.length - 1)
}

export function clear(array: Array<any>) {
    array.splice(0, array.length)
}
