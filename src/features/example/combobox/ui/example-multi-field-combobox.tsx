import { fruits } from '@/entities/options/fruits';
import { ButtonProvider } from '@/shared/ui/button';
import { FieldCombobox } from '@/shared/ui/field-combobox';
import { Flex } from '@/shared/ui/flex';

export function ExampleMultiFieldCombobox() {
	return (
		<FieldCombobox.Root items={fruits} multiple modal>
			<Flex direction="column" gapY="1">
				<FieldCombobox.Label>Multi field combobox</FieldCombobox.Label>
				<FieldCombobox.InputContainer radius="3">
					<FieldCombobox.Chips>
						<FieldCombobox.BaseValue>
							{(values: string[]) =>
								values.map(value => (
									<FieldCombobox.Chip key={value} size="1">
										<FieldCombobox.ChipLabel>{value}</FieldCombobox.ChipLabel>
									</FieldCombobox.Chip>
								))
							}
						</FieldCombobox.BaseValue>
						<FieldCombobox.MultiInput placeholder="Input fruit name.." />
					</FieldCombobox.Chips>
					<FieldCombobox.Slot side="right" px="2">
						<ButtonProvider
							variant="clear"
							color="secondary-soft"
							size="2"
							radius="circular"
							iconButton
						>
							<FieldCombobox.Clear />
							<FieldCombobox.Trigger />
						</ButtonProvider>
					</FieldCombobox.Slot>
				</FieldCombobox.InputContainer>
			</Flex>
			<FieldCombobox.Popup>
				<FieldCombobox.ScrollArea>
					<FieldCombobox.Empty>Not fruits found</FieldCombobox.Empty>
					<FieldCombobox.List>
						{(item: string) => (
							<FieldCombobox.CheckboxItem key={item} value={item} visualMargin="1">
								{item}
							</FieldCombobox.CheckboxItem>
						)}
					</FieldCombobox.List>
				</FieldCombobox.ScrollArea>
			</FieldCombobox.Popup>
		</FieldCombobox.Root>
	);
}
