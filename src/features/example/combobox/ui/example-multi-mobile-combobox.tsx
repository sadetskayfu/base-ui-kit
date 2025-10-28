import { fruits } from '@/entities/options/fruits';
import { ButtonField } from '@/shared/ui/button-field';
import { MobileCombobox } from '@/shared/ui/mobile-combobox';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';

export function ExampleMultiMobileCombobox() {
	return (
		<MobileCombobox.Root items={fruits} multiple modal>
				<Flex direction="column" gapY="1">
					<Text weight='medium'>Multi mobile combobox</Text>
					<MobileCombobox.Trigger render={<ButtonField radius="3" />}>
						<MobileCombobox.MultiValue
							renderLabel={(label) => <Text color="hard">{label}</Text>}
							placeholder="Выбирите фрукты"
						/>
						<MobileCombobox.Icon />
					</MobileCombobox.Trigger>
				</Flex>
			<MobileCombobox.Popup>
				<MobileCombobox.Header title="Выберите фрукты" />
				<MobileCombobox.Chips>
					<MobileCombobox.ChipList>
						{(value: string[]) =>
							value.map(v => (
								<MobileCombobox.Chip key={v}>
									<MobileCombobox.ChipLabel>{v}</MobileCombobox.ChipLabel>
								</MobileCombobox.Chip>
							))
						}
					</MobileCombobox.ChipList>
					<MobileCombobox.Field placeholder="Введитье название фрукта" />
				</MobileCombobox.Chips>
				<MobileCombobox.ScrollArea alwaysVisibleScrollbar={false} offset="4">
					<MobileCombobox.Empty align='center'>Не найдено ниодного фрутка</MobileCombobox.Empty>
					<MobileCombobox.List>
						{(item: string) => (
							<MobileCombobox.CheckboxItem
								key={item}
								value={item}
								radius="3"
								py='3'
								px='4'
								visualMargin="1"
							>
								{item}
							</MobileCombobox.CheckboxItem>
						)}
					</MobileCombobox.List>
				</MobileCombobox.ScrollArea>
			</MobileCombobox.Popup>
		</MobileCombobox.Root>
	);
}
