import { Flex } from "@/shared/ui/flex";
import { ExampleDialog } from "./ui/example-dialog";
import { ExampleNestedDialog } from "./ui/example-nested-dialog";
import { ExampleLeftDialog } from "./ui/example-left-dialog";
import { ExampleRightDialog } from "./ui/example-right-dialog";

export function DialogSection() {
    return (
        <Flex gap='3' justify="center" wrap="wrap">
            <ExampleDialog />
            <ExampleNestedDialog />
            <ExampleLeftDialog />
            <ExampleRightDialog />
        </Flex>
    )
}