import { Button } from '@/shared/ui/button';
import { Popover } from '@/shared/ui/popover';
import { ExamplePopoverContent } from './example-popover-content';

export function ExamplePopoverWithBackdrop() {
	return (
		<Popover.Root modal>
			<Popover.Trigger
				render={<Button variant="ghost" color="secondary" radius="3" animateBorder />}
			>
				With backdrop
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Backdrop />
				<Popover.Positioner>
					<Popover.Popup width="400px">
						<ExamplePopoverContent />
					</Popover.Popup>
				</Popover.Positioner>
			</Popover.Portal>
		</Popover.Root>
	);
}
