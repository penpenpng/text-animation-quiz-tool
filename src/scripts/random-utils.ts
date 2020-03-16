import { update } from "./array-utils"
import { ThrowInvalidArgumentError } from "./errors"


export function randomIndex(n: number): number {
    if (n < 0) ThrowInvalidArgumentError(n)
    
    return Math.floor(Math.random() * n)
}

export function randomChoice<T>(array: T[]): T {
    if (array.length <= 0) ThrowInvalidArgumentError(array)

    const i = randomIndex(array.length)
    return array[i]
}

export function fisherYateShuffleInPlace(a: any[]) {
    for (let i = 0; i < a.length; i++) {
        const j = Math.floor(Math.random() * (i + 1))
        const e = a[i]
        update(a, i, a[j])
        update(a, j, e)
    }
}
