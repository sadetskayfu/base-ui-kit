import { Button } from '@/shared/ui/components/button';
import { Menu } from '@/shared/ui/components/menu';

export function ExampleMenu() {
	return (
		<Menu.Root>
			<Menu.Trigger render={<Button color="secondary" variant='ghost' radius="3" />}>
				Menu
				<Menu.Icon />
			</Menu.Trigger>
			<Menu.Portal>
				<Menu.Positioner align="start">
					<Menu.Popup width="300px">
						<Menu.ScrollArea>
							<Menu.Group>
								<Menu.GroupLabel>Group</Menu.GroupLabel>
								<Menu.Item>Item 1</Menu.Item>
								<Menu.Item>Item 2</Menu.Item>
							</Menu.Group>
							<Menu.Separator />
							<Menu.Group>
								<Menu.GroupLabel>Checkbox group</Menu.GroupLabel>
								<Menu.CheckboxItem>Checkbox 1</Menu.CheckboxItem>
								<Menu.CheckboxItem>Checkbox 2</Menu.CheckboxItem>
							</Menu.Group>
							<Menu.Separator />
							<Menu.Group>
								<Menu.GroupLabel>Radio group</Menu.GroupLabel>
								<Menu.RadioGroup>
									<Menu.RadioItem value="radio1">Radio 1</Menu.RadioItem>
									<Menu.RadioItem value="radio2" disabled>
										Radio 2
									</Menu.RadioItem>
									<Menu.RadioItem value="radio3">Radio 3</Menu.RadioItem>
								</Menu.RadioGroup>
							</Menu.Group>
							<Menu.Separator />
							<Menu.Group>
								<Menu.GroupLabel>Switch group</Menu.GroupLabel>
								<Menu.SwitchItem>Switch 1</Menu.SwitchItem>
								<Menu.SwitchItem>Switch 2</Menu.SwitchItem>
							</Menu.Group>
						</Menu.ScrollArea>
					</Menu.Popup>
				</Menu.Positioner>
			</Menu.Portal>
		</Menu.Root>
	);
}
