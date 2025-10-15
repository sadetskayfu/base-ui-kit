// import z, { type ZodObject } from 'zod';
// import { EMPTY_OBJECT } from '../constants';

// const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// const errorDataSchema = z.object({
// 	message: z.string().optional(),
// 	statusCode: z.number().optional(),
// 	error: z.string().optional(),
// });

// type ErrorData = z.infer<typeof errorDataSchema>;

// type RequestInitType<S extends ZodObject<any> | undefined> = {
// 	json?: unknown;
// 	zodSchema?: S;
// 	_retry?: boolean;
// } & RequestInit;

// export class ApiError extends Error {
// 	readonly data: ErrorData;

// 	constructor(data: ErrorData) {
// 		super(`Api error ${data.statusCode ?? 'unknown'}: ${data.message ?? 'Unknown error'}`);
// 		this.data = data;
// 		this.name = 'ApiError';
// 		Object.setPrototypeOf(this, ApiError.prototype);
// 	}
// }

// async function getErrorData(response: Response, fallbackMessage: string = 'Unknown error') {
// 	let errorData: ErrorData;

// 	if (response.headers.get('Content-Type')?.includes('application/json')) {
// 		try {
// 			errorData = errorDataSchema.parse(await response.json());
// 		} catch (error) {
// 			errorData = {
// 				message: error instanceof Error ? error.message : fallbackMessage,
// 				statusCode: response.status,
// 			};
// 		}
// 	} else {
// 		errorData = { message: fallbackMessage, statusCode: response.status };
// 	}

// 	return errorData;
// }

// export const jsonApiInstance = async <T, S extends ZodObject<any> | undefined = undefined>(
// 	url: string,
// 	init: RequestInitType<S> = EMPTY_OBJECT
// ): Promise<S extends ZodObject<any> ? z.infer<S> : T> => {
// 	let headers = init.headers ?? EMPTY_OBJECT;

// 	if (init.json) {
// 		headers = {
// 			...headers,
// 			'Content-Type': 'application/json',
// 		};
// 		init.body = JSON.stringify(init.json);
// 	}

// 	const response = await fetch(`${BASE_URL}${url}`, {
// 		...init,
// 		headers,
// 		credentials: 'include',
// 	});

// 	if (!response.ok) {
// 		const errorData = await getErrorData(response, 'Unknown error');

// 		if (errorData.statusCode === 401 && !init._retry) {
// 			try {
// 				const refreshResponse = await fetch(`${BASE_URL}/auth/session/refresh`, {
// 					method: 'POST',
// 					credentials: 'include',
// 				});

// 				if (refreshResponse.ok) {
// 					return jsonApiInstance<T, S>(url, { ...init, _retry: true });
// 				}
// 			} catch (_) {
// 				// Если рефреш сессия не удалась, выбрасываем исходную ошибку
// 				throw new ApiError(errorData);
// 			}
// 		}

// 		throw new ApiError(errorData);
// 	}

// 	const data = await response.json();

// 	if (init.zodSchema) {
// 		try {
// 			const parsedData = init.zodSchema.parse(data);

// 			return parsedData as S extends ZodObject<any> ? z.infer<S> : T;
// 		} catch (error) {
// 			throw new ApiError({
// 				message:
// 					error instanceof Error
// 						? error.message
// 						: 'Validation error while parse response data',
// 			});
// 		}
// 	} else {
// 		return data as S extends ZodObject<any> ? z.infer<S> : T;
// 	}
// };
