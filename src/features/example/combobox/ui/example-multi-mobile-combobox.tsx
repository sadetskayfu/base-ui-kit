import { fruits } from '@/entities/options/fruits';
import { Button } from '@/shared/ui/button';
import { MobileCombobox } from '@/shared/ui/combobox';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';

export function ExampleMultiMobileCombobox() {
	return (
		<MobileCombobox.Root items={fruits} multiple modal>
			<Flex direction="column" gapY="1">
				<Text weight="medium">Multi mobile MobileCombobox</Text>
				<MobileCombobox.Trigger
					render={<Button size="4" variant="ghost" color="accent" radius="3" />}
				>
					<MobileCombobox.Value>
						{(value: string[]) => {
							if (value.length === 0) {
								return `Select fruits`;
							}
							if (value.length === 1) {
								return value[0];
							}
							return `${value[0]} (+${value.length - 1} more)`;
						}}
					</MobileCombobox.Value>
				</MobileCombobox.Trigger>
			</Flex>
			<MobileCombobox.Popup>
				<MobileCombobox.Header title="Fruit" />
				<MobileCombobox.Chips>
					<MobileCombobox.ChipList placeholder="Здесь будут отображаться выбранные вами фрукты">
						{(value: string[]) =>
							value.map(v => (
								<MobileCombobox.Chip key={v}>
									<MobileCombobox.ChipLabel>{v}</MobileCombobox.ChipLabel>
								</MobileCombobox.Chip>
							))
						}
					</MobileCombobox.ChipList>
                    <MobileCombobox.Field placeholder='Input fruit name..'/>
				</MobileCombobox.Chips>
				<MobileCombobox.ScrollArea alwaysVisibleScrollbar={false}>
					<MobileCombobox.Empty>
						Not fruits found
					</MobileCombobox.Empty>
					<MobileCombobox.List>
						{(item: string) => (
							<MobileCombobox.CheckboxItem
								key={item}
								value={item}
								radius="3"
								visualMargin="2"
                                disableRipple
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
