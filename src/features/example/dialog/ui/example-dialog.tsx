import { Button } from '@/shared/ui/button';
import { Dialog } from '@/shared/ui/dialog';

export function ExampleDialog() {
	return (
		<Dialog.Root>
			<Dialog.Trigger render={<Button radius="3" />}>Dialog</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Backdrop />
				<Dialog.Popup>
					<Dialog.Header>
						<Dialog.Title>Генератор</Dialog.Title>
						<Dialog.HeaderClose />
					</Dialog.Header>
					<Dialog.Description>
						Генератор случайного текста онлайн. В основе данного скрипта для
						производства текста рыбы лежит универсальный код составления речей.
					</Dialog.Description>
				</Dialog.Popup>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
