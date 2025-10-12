import { Flex } from '@/shared/ui/components/flex';
import { ExampleField } from './ui/example-field';
import { ExampleTextarea } from './ui/example-textarea';
import { FieldProvider } from '@/shared/ui/components/field';
import { ExamplePasswordField } from './ui/example-password-field';
import { ExampleNumberField } from './ui/example-number-field';

export function FieldSection() {
	return (
		<Flex justify="center">
			<Flex maxWidth="400px" width="100%" gapY="5" direction="column">
				<FieldProvider radius='3'>
					<ExampleField />
					<ExamplePasswordField />
					<ExampleNumberField />
					<ExampleTextarea />
				</FieldProvider>
			</Flex>
		</Flex>
	);
}
