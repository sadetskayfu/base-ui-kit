import { fruits } from '@/entities/options/fruits';
import { ButtonField } from '@/shared/ui/button-field';
import { MobileCombobox } from '@/shared/ui/mobile-combobox';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';

export function ExampleSingleMobileCombobox() {
	return (
		<MobileCombobox.Root items={fruits} modal>
			<Flex direction="column" gapY="1">
					<Text weight='medium'>Single mobile combobox</Text>
					<MobileCombobox.Trigger render={<ButtonField radius="3" />}>
						<MobileCombobox.Value
							renderLabel={value => <Text color="hard">{value}</Text>}
							placeholder="Выбирите фрукт"
						/>
						<MobileCombobox.Icon />
					</MobileCombobox.Trigger>
			</Flex>
			<MobileCombobox.Popup>
				<MobileCombobox.Header title="Выбирите фрукт" />
				<MobileCombobox.Field placeholder="Введите название фрукта" />
				<MobileCombobox.ScrollArea alwaysVisibleScrollbar={false} offset='4'>
					<MobileCombobox.Empty align='center'>Не найдено ниодного фрутка</MobileCombobox.Empty>
					<MobileCombobox.List>
						{(item: string) => (
							<MobileCombobox.RadioItem
								key={item}
								value={item}
								radius="3"
								visualMargin="1"
								py='3'
								px='4'
							>
								{item}
							</MobileCombobox.RadioItem>
						)}
					</MobileCombobox.List>
				</MobileCombobox.ScrollArea>
			</MobileCombobox.Popup>
		</MobileCombobox.Root>
	);
}
