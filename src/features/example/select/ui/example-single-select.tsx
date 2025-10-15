import { fonts } from '@/entities/options/fonts';
import { Button } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import { Icon } from '@/shared/ui/icons';
import { Select } from '@/shared/ui/select';
import { Text } from '@/shared/ui/text';

export function ExampleSingleSelect() {
	return (
		<Select.Root items={fonts}>
			<Flex direction="column" gapY="1">
				<Text weight="medium">Single select</Text>
				<Select.Trigger
					nativeButton
					render={
						<Button
							size="4"
							color="secondary"
							variant="ghost"
							radius="3"
							animateBorder
						/>
					}
				>
                    <Select.BaseValue />
					<Select.Icon />
				</Select.Trigger>
			</Flex>
			<Select.Portal>
				<Select.Positioner>
					<Select.Popup>
						<Select.List>
							{fonts.map(font => (
								<Select.Item key={font.label} value={font.value}>
									{font.label}
									<Select.ItemIndicator>
										<Icon.Check />
									</Select.ItemIndicator>
								</Select.Item>
							))}
						</Select.List>
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
		</Select.Root>
	);
}
