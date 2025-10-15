import { createToastManager, Toast } from '@/shared/ui/toast';
import { ToastList } from './toast-list';
import { CreateToastButtons } from './create-toast-buttons';
import { toastManager } from './toast-manager';

export function ToastSection() {
	return (
		<Toast.Provider toastManager={toastManager as createToastManager.ToastManager}>
			<CreateToastButtons />
			<Toast.Portal>
				<Toast.Viewport>
					<ToastList />
				</Toast.Viewport>
			</Toast.Portal>
		</Toast.Provider>
	);
}
