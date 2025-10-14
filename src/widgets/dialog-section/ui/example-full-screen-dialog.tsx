import { Dialog } from '@/shared/ui/components/dialog';
import { Button } from '@/shared/ui/components/button';

export function ExampleFullScreenDialog() {
	return (
		<Dialog.Root>
			<Dialog.Trigger render={<Button variant="ghost" color="secondary" radius="3" />}>
				Fullscreen dialog
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Backdrop />
				<Dialog.Popup fullScreen>
					<Dialog.Header>
						<Dialog.Title>Title</Dialog.Title>
						<Dialog.HeaderClose />
					</Dialog.Header>
				</Dialog.Popup>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
