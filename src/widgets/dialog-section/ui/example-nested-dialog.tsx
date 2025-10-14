import { Dialog } from '@/shared/ui/components/dialog';
import { ExampleDialogContent } from './example-dialog-content';
import { Button } from '@/shared/ui/components/button';

export function ExampleNestedDialog() {
	return (
		<Dialog.Root>
			<Dialog.Trigger render={<Button variant="ghost" color="secondary" radius="3" />}>
				Nested dialog
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Backdrop />
				<Dialog.Popup>
					<ExampleDialogContent>
						<Dialog.Root>
							<Dialog.Trigger render={<Button color="accent" />}>
								Open nested dialog
							</Dialog.Trigger>
							<Dialog.Portal>
								<Dialog.Popup>
									<ExampleDialogContent />
								</Dialog.Popup>
							</Dialog.Portal>
						</Dialog.Root>
					</ExampleDialogContent>
				</Dialog.Popup>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
