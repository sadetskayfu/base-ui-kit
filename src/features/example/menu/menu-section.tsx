import { Flex } from '@/shared/ui/flex';
import { ExampleMenu } from './ui/example-menu';
import { ExampleNestedMenu } from './ui/example-nested-menu';
import { ExampleMenuWithBackdrop } from './ui/example-menu-with-backdrop';
import { ButtonProvider } from '@/shared/ui/button';
import { ExampleMenuWithArrow } from './ui/example-menu-with-arrow';

export function MenuSection() {
	return (
		<Flex gap="3" justify='center' wrap='wrap'>
			<ButtonProvider radius="3" variant="ghost" color="secondary">
				<ExampleMenu />
				<ExampleNestedMenu />
				<ExampleMenuWithBackdrop />
				<ExampleMenuWithArrow />
			</ButtonProvider>
		</Flex>
	);
}
