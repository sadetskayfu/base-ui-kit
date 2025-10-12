import { createToastManager, Toast } from '@/shared/ui/components/toast';
import { ToastList } from './toast-list';
import { CreateToastButtons } from './create-toast-buttons';
import { toastManager } from './toast-manager';
import { Accordion } from '@/shared/ui/components/accordion';

export function ToastSection() {
	return (
		<Accordion.Item title='Toast'>
			<Toast.Provider toastManager={toastManager as createToastManager.ToastManager}>
				<CreateToastButtons />
				<Toast.Portal>
					<Toast.Viewport>
						<ToastList />
					</Toast.Viewport>
				</Toast.Portal>
			</Toast.Provider>
		</Accordion.Item>
	);
}
