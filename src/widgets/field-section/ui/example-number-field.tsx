import { ButtonProvider } from '@/shared/ui/components/button';
import { NumberField } from '@/shared/ui/components/field';
import { Flex } from '@/shared/ui/components/flex';

export function ExampleNumberField() {
	return (
		<NumberField.Root>
			<Flex direction="column" gapY="1">
				<NumberField.ScrubArea>
					<NumberField.Label>Number field</NumberField.Label>
				</NumberField.ScrubArea>
				<NumberField.InputContainer>
					<NumberField.Input />
					<NumberField.Slot side="right" px="2" gap='1'>
						<ButtonProvider
							variant="ghost"
							color="secondary"
							radius="2"
							size="2"
							iconButton
						>
							<NumberField.Decrement />
							<NumberField.Increment />
						</ButtonProvider>
					</NumberField.Slot>
				</NumberField.InputContainer>
			</Flex>
		</NumberField.Root>
	);
}
