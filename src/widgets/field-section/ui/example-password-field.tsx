import { ButtonProvider } from '@/shared/ui/components/button';
import { PasswordField } from '@/shared/ui/components/field';
import { Flex } from '@/shared/ui/components/flex';

export function ExamplePasswordField() {
	return (
		<PasswordField.Root>
			<Flex direction='column' gapY='1'>
				<PasswordField.Label>Password field</PasswordField.Label>
				<PasswordField.InputContainer>
					<PasswordField.Input />
					<PasswordField.Slot side="right" px="2">
						<ButtonProvider
							color="secondary-soft"
							radius="circular"
							size="2"
							variant="clear"
							iconButton
						>
							<PasswordField.Toggle />
						</ButtonProvider>
					</PasswordField.Slot>
				</PasswordField.InputContainer>
			</Flex>
		</PasswordField.Root>
	);
}
