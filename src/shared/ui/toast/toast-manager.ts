import { BaseToast } from '../base/toast';

export const createToastManager = BaseToast.createToastManager;
export const useToastManager = BaseToast.useToastManager;

export namespace createToastManager {
	export type ToastManager = BaseToast.createToastManager.ToastManager;
}

export namespace useToastManager {
	export type AddOptions<Data extends object> = BaseToast.useToastManager.AddOptions<Data>;
	export type UpdateOptions<Data extends object> = BaseToast.useToastManager.UpdateOptions<Data>;
}
