import * as React from 'react';
import { Field } from '@/shared/ui/components/field';
import { Icon } from '@/shared/ui/components/icons';
import { Button, ButtonProvider } from '@/shared/ui/components/button';
import { Flex } from '@/shared/ui/components/flex';

export function ExampleField() {
	const [value, setValue] = React.useState('');

	return (
		<Field.Root>
			<Flex direction="column" gapY="1">
				<Field.Label>Default field</Field.Label>
				<Field.InputContainer>
					<Field.Slot side="left" px='4' separator>
						<Icon.UserRound />
					</Field.Slot>
					<Field.Input
						value={value}
						onChange={event => setValue(event.target.value)}
						placeholder="Input user name.."
					/>
					{value.length > 0 && (
						<Field.Slot side="right" px="2">
							<ButtonProvider
								color="secondary-soft"
								iconButton
								variant="clear"
								radius="circular"
								size='2'
							>
								<Field.Action
									focusOnInputAfterClick
									onClick={() => setValue('')}
									tabIndex={-1}
									render={<Button />}
								>
									<Icon.X />
								</Field.Action>
							</ButtonProvider>
						</Field.Slot>
					)}
				</Field.InputContainer>
			</Flex>
		</Field.Root>
	);
}
