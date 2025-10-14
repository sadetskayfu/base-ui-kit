import { fruits } from '@/entities/options/fruits';
import { ButtonProvider } from '@/shared/ui/components/button';
import { FieldCombobox } from '@/shared/ui/components/combobox';
import { Flex } from '@/shared/ui/components/flex';

export function MultiFieldCombobox() {
	return (
		<FieldCombobox.Root items={fruits} multiple>
			<Flex direction="column" gapY="1">
				<FieldCombobox.Label>Multi field combobox</FieldCombobox.Label>
				<FieldCombobox.InputContainer radius="3">
					<FieldCombobox.Chips>
						<FieldCombobox.Value>
							{(values: string[]) =>
								values.map(value => (
									<FieldCombobox.Chip key={value} size='1'>
										<FieldCombobox.ChipLabel>{value}</FieldCombobox.ChipLabel>
									</FieldCombobox.Chip>
								))
							}
						</FieldCombobox.Value>
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
			<FieldCombobox.Portal>
				<FieldCombobox.Positioner>
					<FieldCombobox.Popup>
						<FieldCombobox.ScrollArea alwaysVisibleScrollbar maxHeight='400px'>
							<FieldCombobox.Empty>Not fruits found</FieldCombobox.Empty>
							<FieldCombobox.List>
								{(item: string) => (
									<FieldCombobox.CheckboxItem key={item} value={item} visualMargin='1'>
										{item}
									</FieldCombobox.CheckboxItem>
								)}
							</FieldCombobox.List>
						</FieldCombobox.ScrollArea>
					</FieldCombobox.Popup>
				</FieldCombobox.Positioner>
			</FieldCombobox.Portal>
		</FieldCombobox.Root>
	);
}
