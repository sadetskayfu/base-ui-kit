import { fruits } from '@/entities/options/fruits';
import { ButtonProvider } from '@/shared/ui/button';
import { FieldCombobox } from '@/shared/ui/combobox';
import { Flex } from '@/shared/ui/flex';

export function ExampleSingleFieldCombobox() {
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
			<FieldCombobox.Popup>
				<FieldCombobox.ScrollArea>
					<FieldCombobox.Empty>Not fruits found</FieldCombobox.Empty>
					<FieldCombobox.List>
						{(item: string) => (
							<FieldCombobox.RadioItem key={item} value={item} visualMargin="1">
								{item}
							</FieldCombobox.RadioItem>
						)}
					</FieldCombobox.List>
				</FieldCombobox.ScrollArea>
			</FieldCombobox.Popup>
		</FieldCombobox.Root>
	);
}
