import { fruits } from '@/entities/options/fruits';
import { Button } from '@/shared/ui/components/button';
import { Combobox } from '@/shared/ui/components/combobox';
import { Field } from '@/shared/ui/components/field';
import { Flex } from '@/shared/ui/components/flex';
import { Text } from '@/shared/ui/components/text';

export function InputInsidePopupCombobox() {
	return (
		<Combobox.Root items={fruits}>
			<Flex direction="column" gapY="1">
				<Text weight='medium'>Input inside popup</Text>
				<Combobox.Trigger render={<Button variant="ghost" color="secondary" radius="3" />}>
					<Combobox.Value>
						{(value: string | null) => {
							if (value) {
								return value;
							}
							return `Select fruit`
						}}
					</Combobox.Value>
				</Combobox.Trigger>
			</Flex>
			<Combobox.Portal>
				<Combobox.Positioner>
					<Combobox.Popup>
						<Flex direction="column" gapY="2">
							<Field.Root>
								<Field.InputContainer radius="2" size="1">
									<Field.Input
										placeholder="Input fruit name.."
										render={<Combobox.Input />}
									/>
								</Field.InputContainer>
							</Field.Root>
							<Combobox.ScrollArea alwaysVisibleScrollbar maxHeight="400px">
								<Combobox.Empty>Not fruits found</Combobox.Empty>
								<Combobox.List>
									{(item: string) => (
										<Combobox.RadioItem
											key={item}
											value={item}
											visualMargin="1"
										>
											{item}
										</Combobox.RadioItem>
									)}
								</Combobox.List>
							</Combobox.ScrollArea>
						</Flex>
					</Combobox.Popup>
				</Combobox.Positioner>
			</Combobox.Portal>
		</Combobox.Root>
	);
}
