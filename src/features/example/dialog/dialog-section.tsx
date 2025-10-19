import { Flex } from "@/shared/ui/flex";
import { ExampleNestedDialog } from "./ui/example-nested-dialog";
import { ExampleLeftDialog } from "./ui/example-left-dialog";
import { ExampleRightDialog } from "./ui/example-right-dialog";

export function DialogSection() {
    return (
        <Flex gap='3' justify="center" wrap="wrap">
            <ExampleNestedDialog />
            <ExampleLeftDialog />
            <ExampleRightDialog />
        </Flex>
    )
}