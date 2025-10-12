import { Field } from '@/shared/ui/components/field';
import { Flex } from '@/shared/ui/components/flex';

export function ExampleTextarea() {
	return (
		<Field.Root>
			<Flex direction="column" gapY="1">
				<Field.Label>Textarea</Field.Label>
				<Field.InputContainer>
					<Field.Textarea placeholder="Input text.." />
				</Field.InputContainer>
			</Flex>
		</Field.Root>
	);
}
