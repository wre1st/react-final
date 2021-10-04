
/* Data Selectors */

export const authSelector = store => store.auth
export const loginUserSelector = store => store.auth.loginUser
export const loginLoadingSelector = store => store.auth.loading
export const loginErrorsSelector = store => store.auth.errors
