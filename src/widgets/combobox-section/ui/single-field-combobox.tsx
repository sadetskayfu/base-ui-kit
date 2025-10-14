import { fruits } from '@/entities/options/fruits';
import { ButtonProvider } from '@/shared/ui/components/button';
import { FieldCombobox } from '@/shared/ui/components/combobox';
import { Flex } from '@/shared/ui/components/flex';

export function SingleFieldCombobox() {
	return (
		<FieldCombobox.Root items={fruits}>
			<Flex direction="column" gapY="1">
				<FieldCombobox.Label>Single field combobox</FieldCombobox.Label>
				<FieldCombobox.InputContainer radius="3">
					<FieldCombobox.Input placeholder="Input fruit name.." />
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
									<FieldCombobox.RadioItem key={item} value={item} visualMargin='1'>
										{item}
									</FieldCombobox.RadioItem>
								)}
							</FieldCombobox.List>
						</FieldCombobox.ScrollArea>
					</FieldCombobox.Popup>
				</FieldCombobox.Positioner>
			</FieldCombobox.Portal>
		</FieldCombobox.Root>
	);
}
