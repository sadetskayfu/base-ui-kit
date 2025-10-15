import { Button } from '@/shared/ui/button';
import { Popover } from '@/shared/ui/popover';
import { ExamplePopoverContent } from './example-popover-content';

export function ExamplePopoverWithArrow() {
	return (
		<Popover.Root>
			<Popover.Trigger
				render={<Button variant="ghost" color="secondary" radius="3" animateBorder />}
			>
				With arrow
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Positioner arrow>
					<Popover.Popup width="400px">
						<Popover.Arrow />
						<ExamplePopoverContent />
					</Popover.Popup>
				</Popover.Positioner>
			</Popover.Portal>
		</Popover.Root>
	);
}
