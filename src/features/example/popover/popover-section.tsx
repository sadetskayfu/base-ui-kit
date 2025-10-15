import { Flex } from '@/shared/ui/flex';
import { ExamplePopover } from './ui/example-popover';
import { ExamplePopoverWithBackdrop } from './ui/example-popover-with-backdrop';
import { ExamplePopoverWithArrow } from './ui/example-popover-with-arrow';
import { ExampleOpenOnHoverPopover } from './ui/example-popover-open-on-hover';

export function PopoverSection() {
	return (
		<Flex gap="3" justify="center" wrap='wrap'>
			<ExamplePopover />
            <ExamplePopoverWithBackdrop />
            <ExamplePopoverWithArrow />
            <ExampleOpenOnHoverPopover />
		</Flex>
	);
}
