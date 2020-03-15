export function update<T>(array: T[], i: number, newValue: T) {
    array.splice(i, 1, newValue)
}

export function remove<T>(array: T[], i: number): T {
    return array.splice(i, 1)[0]
}

export function push<T>(array: T[], value: T) {
    array.push(value)
}

export function pop<T>(array: T[]): T {
    return remove(array, array.length - 1)
}

export function clear(array: any[]) {
    array.splice(0, array.length)
}

export function iota(n: number): number[] {
    let array = []
    for (let i = 0; i < n; i++)
        array.push(i)
    return array
}
