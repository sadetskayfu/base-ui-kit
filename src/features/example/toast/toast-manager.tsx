import { useToastManager, createToastManager } from '@/shared/ui/toast';

export type ToastType = 'info' | 'warning' | 'error' | 'success' | 'loading';

const baseToastManager = createToastManager();

function add<Data extends object>(options: useToastManager.AddOptions<Data> & { type: ToastType }) {
	return baseToastManager.add(options);
}

function update<Data extends object>(
	id: string,
	options: useToastManager.UpdateOptions<Data> & { type: ToastType }
) {
	return baseToastManager.update(id, options);
}

export const toastManager = {
	...baseToastManager,
	add,
	update,
};
