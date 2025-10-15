import { Flex } from '@/shared/ui/flex';
import { ExampleField } from './ui/example-field';
import { FieldProvider } from '@/shared/ui/field';
import { ExamplePasswordField } from './ui/example-password-field';
import { ExampleNumberField } from './ui/example-number-field';
import { ExampleTextarea } from './ui/example-textarea';

export function FieldSection() {
	return (
		<Flex justify="center">
			<Flex direction="column" gap="3" width="400px">
				<FieldProvider radius="3">
					<ExampleField />
					<ExamplePasswordField />
                    <ExampleNumberField />
                    <ExampleTextarea />
				</FieldProvider>
			</Flex>
		</Flex>
	);
}
