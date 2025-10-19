import { Button } from '@/shared/ui/button';
import { Popover } from '@/shared/ui/popover';
import { ExamplePopoverContent } from './example-popover-content';

export function ExamplePopover() {
	return (
		<Popover.Root>
			<Popover.Trigger
				render={<Button variant="ghost" color="secondary" radius="3" />}
			>
				Default
			</Popover.Trigger>
			<Popover.Popup width="400px">
				<ExamplePopoverContent />
			</Popover.Popup>
		</Popover.Root>
	);
}
