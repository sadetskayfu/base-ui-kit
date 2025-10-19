import { Button } from '@/shared/ui/button';
import { Popover } from '@/shared/ui/popover';
import { ExamplePopoverContent } from './example-popover-content';

export function ExamplePopoverWithBackdrop() {
	return (
		<Popover.Root modal>
			<Popover.Trigger render={<Button variant="ghost" color="secondary" radius="3" />}>
				With backdrop
			</Popover.Trigger>
			<Popover.Popup width="400px" backdrop>
				<ExamplePopoverContent />
			</Popover.Popup>
		</Popover.Root>
	);
}
