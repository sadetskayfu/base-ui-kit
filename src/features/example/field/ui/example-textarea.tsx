import { Field } from '@/shared/ui/field';
import { Flex } from '@/shared/ui/flex';

export function ExampleTextarea() {
	return (
		<Field.Root>
			<Flex direction="column" gapY="1">
				<Field.Label>Textarea</Field.Label>
				<Field.InputContainer>
					<Field.Textarea rows={4} placeholder="Input text.." />
				</Field.InputContainer>
			</Flex>
		</Field.Root>
	);
}
