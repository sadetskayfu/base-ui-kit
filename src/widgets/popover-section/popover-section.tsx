import { Flex } from "@/shared/ui/components/flex";
import { ExamplePopover } from "./ui/example-popover";
import { ExampleOpenOnHoverPopover } from "./ui/example-open-on-hover-popover";
import { ExamplePopoverWithBackdrop } from "./ui/example-popover-with-backdrop";
import { ExamplePopoverWithArrow } from "./ui/example-popover-with-arrow";

export function PopoverSection() {
    return (
        <Flex gap='3'>
            <ExamplePopover />
            <ExampleOpenOnHoverPopover />
            <ExamplePopoverWithBackdrop />
            <ExamplePopoverWithArrow />
        </Flex>
    )
}