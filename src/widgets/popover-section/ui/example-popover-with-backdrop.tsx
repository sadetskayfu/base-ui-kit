import { Button } from '@/shared/ui/components/button';
import { Popover } from '@/shared/ui/components/popover';
import { ExamplePopoverContent } from './example-popover-content';

export function ExamplePopoverWithBackdrop() {
	return (
		<Popover.Root modal>
			<Popover.Trigger render={<Button variant="ghost" color="secondary" radius="3" />}>
				With backdrop
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Backdrop />
				<Popover.Positioner>
					<Popover.Popup p="4" width="400px">
						<ExamplePopoverContent />
					</Popover.Popup>
				</Popover.Positioner>
			</Popover.Portal>
		</Popover.Root>
	);
}
