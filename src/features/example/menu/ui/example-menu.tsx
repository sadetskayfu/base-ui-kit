import * as React from 'react';
import { Button } from '@/shared/ui/button';
import { Menu } from '@/shared/ui/menu';

export function ExampleMenu() {
	const [radio, setRadio] = React.useState('radio1');
	const [switch1, setSwitch1] = React.useState(true);
	const [switch2, setSwitch2] = React.useState(false);
	const [checkbox1, setCheckbox1] = React.useState(true);
	const [checkbox2, setCheckbox2] = React.useState(false);

	return (
		<Menu.Root>
			<Menu.Trigger render={<Button />}>
				Menu
				<Menu.Icon />
			</Menu.Trigger>
			<Menu.Popup width="300px" align="start">
				<Menu.ScrollArea>
					<Menu.Group>
						<Menu.GroupLabel>Group</Menu.GroupLabel>
						<Menu.Item>Item 1</Menu.Item>
						<Menu.Item>Item 2</Menu.Item>
					</Menu.Group>
					<Menu.Separator />
					<Menu.Group>
						<Menu.GroupLabel>Checkbox group</Menu.GroupLabel>
						<Menu.CheckboxItem checked={checkbox1} onCheckedChange={setCheckbox1}>
							Checkbox 1
						</Menu.CheckboxItem>
						<Menu.CheckboxItem checked={checkbox2} onCheckedChange={setCheckbox2}>
							Checkbox 2
						</Menu.CheckboxItem>
					</Menu.Group>
					<Menu.Separator />
					<Menu.Group>
						<Menu.GroupLabel>Radio group</Menu.GroupLabel>
						<Menu.RadioGroup value={radio} onValueChange={setRadio}>
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
						<Menu.SwitchItem checked={switch1} onCheckedChange={setSwitch1}>
							Switch 1
						</Menu.SwitchItem>
						<Menu.SwitchItem checked={switch2} onCheckedChange={setSwitch2}>
							Switch 2
						</Menu.SwitchItem>
					</Menu.Group>
				</Menu.ScrollArea>
			</Menu.Popup>
		</Menu.Root>
	);
}
