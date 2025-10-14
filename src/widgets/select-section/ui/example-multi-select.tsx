import { fruits } from '@/entities/options/fruits';
import { Button } from '@/shared/ui/components/button';
import { Select } from '@/shared/ui/components/select';

export function ExampleMultiSelect() {
	return (
		<Select.Root multiple>
			<Select.Trigger
				nativeButton
				render={<Button color="secondary" variant="ghost" radius="3" size="3" animateBorder />}
			>
				<Select.Value>
					{(value: string[]) => {
						if (value.length === 0) {
							return 'Select fruits...';
						}
						if (value.length === 1) {
							return value[0];
						}
						return `${value[0]} (+${value.length - 1} more)`;
					}}
				</Select.Value>
				<Select.Icon />
			</Select.Trigger>
			<Select.Portal>
				<Select.Positioner alignItemWithTrigger={false}>
					<Select.Popup height='400px'>
						<Select.ScrollArea alwaysVisibleScrollbar>
							<Select.List>
								{fruits.map(fruit => (
									<Select.CheckboxItem key={fruit} value={fruit} visualMargin="1">
										{fruit}
									</Select.CheckboxItem>
								))}
							</Select.List>
						</Select.ScrollArea>
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
		</Select.Root>
	);
}
