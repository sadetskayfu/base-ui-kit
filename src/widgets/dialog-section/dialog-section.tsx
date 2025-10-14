import { Flex } from '@/shared/ui/components/flex';
import { ExampleDialog } from './ui/example-dialog';
import { ExampleNestedDialog } from './ui/example-nested-dialog';
import { ExampleFullScreenDialog } from './ui/example-full-screen-dialog';

export function DialogSection() {
	return (
		<Flex gap="3">
			<ExampleDialog />
            <ExampleNestedDialog />
            <ExampleFullScreenDialog />
		</Flex>
	);
}
