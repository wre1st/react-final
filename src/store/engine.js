

export const save = ( key, value ) => {
    sessionStorage.setItem(key, value)
}

export const get = ( key ) => {
    sessionStorage.getItem( key )
}

export const clear = ( key ) => {
    sessionStorage.removeItem( key )
}

export const clearAll = () => {
    sessionStorage.clear()
}