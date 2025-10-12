import { Toast } from '@base-ui-components/react';

export const createToastManager = Toast.createToastManager;
export const useToastManager = Toast.useToastManager;

export namespace createToastManager {
	export type ToastManager = Toast.createToastManager.ToastManager;
}

export namespace useToastManager {
	export type AddOptions<Data extends object> = Toast.useToastManager.AddOptions<Data>;
	export type UpdateOptions<Data extends object> = Toast.useToastManager.UpdateOptions<Data>;
}
