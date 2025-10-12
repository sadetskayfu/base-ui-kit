import * as React from 'react';
import { Button, ButtonProvider } from '@/shared/ui/components/button';
import { toastManager, type ToastType } from './toast-manager';
import { Flex } from '@/shared/ui/components/flex';

export function CreateToastButtons() {
	const [count, setCount] = React.useState(0);

	function createToast(type: ToastType) {
		toastManager.add({
			title: `Toast ${count + 1} created`,
			description:
				type === 'info'
					? 'This is a toast notification. This is a toast notification. This is  toast notification. This is a toast notification.'
					: 'This is a toast notification',
			actionProps: { children: 'Action', onClick: () => console.log('Clicked action') },
			type,
			timeout: 10000,
		});

		setCount(prev => prev + 1);
	}

	function createPromiseToast() {
		toastManager.promise(
			new Promise<string>((resolve, reject) => {
				const shouldSucceed = Math.random() > 0.3;

				setTimeout(() => {
					if (shouldSucceed) {
						resolve('operation completed');
					} else {
						reject('operation failed');
					}
				}, 3000);
			}),
			{
				loading: { title: 'Loading...', type: 'info' as ToastType },
				success: (data: string) => ({
					title: `Success: ${data}`,
					type: 'success' as ToastType,
				}),
				error: (err: string) => ({ title: `Error: ${err}`, type: 'error' as ToastType }),
			}
		);
	}

	return (
		<Flex gap="4" wrap='wrap'>
			<ButtonProvider variant='ghost'>
				<Button color="secondary" onClick={() => createToast('info')}>
					Info toast
				</Button>
				<Button color="success" onClick={() => createToast('success')}>
					Success toast
				</Button>
				<Button color="warning" onClick={() => createToast('warning')}>
					Warning toast
				</Button>
				<Button color="error" onClick={() => createToast('error')}>
					Error toast
				</Button>
				<Button color="secondary" onClick={createPromiseToast}>
					Promise
				</Button>
			</ButtonProvider>
		</Flex>
	);
}
