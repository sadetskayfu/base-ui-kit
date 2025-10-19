import { fruits } from '@/entities/options/fruits';
import { Button } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import { Select } from '@/shared/ui/select';
import { Text } from '@/shared/ui/text';

export function ExampleMultiSelect() {
	return (
		<Select.Root multiple>
			<Flex direction="column" gap="1">
				<Text weight="medium">Multi select</Text>
				<Select.Trigger
					nativeButton
					render={
						<Button
							color="secondary"
							variant="ghost"
							radius="3"
							size="4"
						/>
					}
				>
					<Select.MultiValue placeholder='Select fruits' />
					<Select.Icon />
				</Select.Trigger>
			</Flex>
			<Select.Popup>
				<Select.ScrollArea>
					<Select.List>
						{fruits.map(fruit => (
							<Select.CheckboxItem key={fruit} value={fruit} visualMargin="1">
								{fruit}
							</Select.CheckboxItem>
						))}
					</Select.List>
				</Select.ScrollArea>
			</Select.Popup>
		</Select.Root>
	);
}
