import { fonts } from '@/entities/options/fonts';
import { Button } from '@/shared/ui/components/button';
import { Icon } from '@/shared/ui/components/icons';
import { Select } from '@/shared/ui/components/select';

export function ExampleSingleSelect() {
	return (
		<Select.Root items={fonts}>
			<Select.Trigger nativeButton render={<Button size='3' color="secondary" variant="ghost" radius="3" animateBorder />}>
				<Select.Value />
				<Select.Icon />
			</Select.Trigger>
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
