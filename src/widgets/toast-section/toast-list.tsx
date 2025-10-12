import { Alert } from '@/shared/ui/components/alert';
import { Toast, useToastManager } from '@/shared/ui/components/toast';
import { Loader } from '@/shared/ui/components/loader';
import { Button } from '@/shared/ui/components/button';
import type { ToastType } from './toast-manager';
import styles from './toast-list.module.scss';

export function ToastList() {
	const { toasts } = useToastManager();

	return toasts.map(toast => {
		const type = toast.type as ToastType;

		return (
			<Toast.Root
				key={toast.id}
				toast={toast}
				render={
					<Alert.Root
						className={styles['alert']}
						severity={type === 'loading' ? 'info' : type}
                        radius='4'
					/>
				}
			>
				<Toast.Content className={styles['content']}>
					<Alert.Header>
						{type === 'loading' ? <Loader /> : <Alert.Icon />}
						<Toast.Title render={<Alert.Title />} />
						<Toast.Close render={<Alert.Close />} />
					</Alert.Header>
					<Alert.Content>
						<Toast.Description render={<Alert.Description />} />
						<Toast.Action
							render={
								<Button
									ml="auto"
									mt="2"
									size="2"
									variant="clear"
									color={type === 'info' || type === 'loading' ? 'secondary' : type}
								/>
							}
						/>
					</Alert.Content>
				</Toast.Content>
			</Toast.Root>
		);
	});
}
