import { Button } from '@/shared/ui/button';
import { Dialog } from '@/shared/ui/dialog';

export function ExampleRightDialog() {
	return (
		<Dialog.Root>
			<Dialog.Trigger render={<Button radius="3" />}>Right side</Dialog.Trigger>
			<Dialog.Popup side="right" backdrop>
				<Dialog.Header justify="start">
					<Dialog.HeaderClose />
					<Dialog.Title>Генератор</Dialog.Title>
				</Dialog.Header>
				<Dialog.Description>
					Генератор случайного текста онлайн. В основе данного скрипта для производства
					текста рыбы лежит универсальный код составления речей.
				</Dialog.Description>
			</Dialog.Popup>
		</Dialog.Root>
	);
}
