import { Button } from '@/shared/ui/button';
import { Popover } from '@/shared/ui/popover';
import { ExamplePopoverContent } from './example-popover-content';

export function ExamplePopoverWithArrow() {
	return (
		<Popover.Root>
			<Popover.Trigger render={<Button variant="ghost" color="secondary" radius="3" />}>
				With arrow
			</Popover.Trigger>
			<Popover.Popup width="400px" arrow>
				<ExamplePopoverContent />
			</Popover.Popup>
		</Popover.Root>
	);
}
