import { Flex } from "@/shared/ui/components/flex";
import { ExampleMenu } from "./ui/example-menu";
import { ExampleNestedMenu } from "./ui/example-nested-menu";
import { ExampleMenuWithArrow } from "./ui/example-menu-with-arrow";
import { ExampleMenuWithBackdrop } from "./ui/example-menu-with-backdrop";

export function MenuSection() {
    return (
        <Flex gap='3'>
            <ExampleMenu />
            <ExampleNestedMenu />
            <ExampleMenuWithArrow />
            <ExampleMenuWithBackdrop />
        </Flex>
    )
}