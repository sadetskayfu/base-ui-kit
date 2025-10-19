import { fruits } from '@/entities/options/fruits';
import { Button } from '@/shared/ui/button';
import { Combobox } from '@/shared/ui/combobox';
import { Field } from '@/shared/ui/field';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';

export function ExampleInputInsidePopupCombobox() {
	return (
		<Combobox.Root items={fruits}>
			<Flex direction="column" gapY="1">
				<Text weight="medium">Input inside popup</Text>
				<Combobox.Trigger
					render={<Button size="4" variant="ghost" color="accent" radius="3" />}
				>
					<Combobox.Value placeholder="Select fruit" />
				</Combobox.Trigger>
			</Flex>
			<Combobox.Popup aria-label="Input inside popup combobox" gapY="2">
				<Field.Root>
					<Field.InputContainer radius="2" size="1">
						<Field.Input placeholder="Input fruit name.." render={<Combobox.Input />} />
					</Field.InputContainer>
				</Field.Root>
				<Combobox.ScrollArea>
					<Combobox.Empty>Not fruits found</Combobox.Empty>
					<Combobox.List>
						{(item: string) => (
							<Combobox.RadioItem key={item} value={item} visualMargin="1">
								{item}
							</Combobox.RadioItem>
						)}
					</Combobox.List>
				</Combobox.ScrollArea>
			</Combobox.Popup>
		</Combobox.Root>
	);
}
