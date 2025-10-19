import { Button } from '@/shared/ui/button';
import { Popover } from '@/shared/ui/popover';
import { ExamplePopoverContent } from './example-popover-content';

export function ExampleOpenOnHoverPopover() {
	return (
		<Popover.Root openOnHover>
			<Popover.Trigger
				render={<Button variant="ghost" color="secondary" radius="3" />}
			>
				Open on hover
			</Popover.Trigger>
			<Popover.Popup width="400px">
				<ExamplePopoverContent />
			</Popover.Popup>
		</Popover.Root>
	);
}
