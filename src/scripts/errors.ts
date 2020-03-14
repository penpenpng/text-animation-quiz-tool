function ThrowError(label: string, v?: any): never {
    if (v !== undefined)
        label += ": " + v
    
    throw label
}

export function ThrowDirtyStateError(v?: any): never {
    ThrowError("Dirty State", v)
}

export function ThrowInvalidOperationError(v?: any): never {
    ThrowError("Invalid Operation", v)
}

export function ThrowNotImplementedError(): never {
    ThrowError("Not Implemented")
}
