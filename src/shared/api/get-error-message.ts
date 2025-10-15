// import { ApiError } from '../api'

// export function getErrorMessage(error: unknown, fallbackMessage?: string) {
//     let errorMessage: string | undefined

// 	if (error instanceof ApiError) {
// 		errorMessage = error.data.message || fallbackMessage
// 	} else {
// 		errorMessage = fallbackMessage
// 	}

//     return errorMessage
// }