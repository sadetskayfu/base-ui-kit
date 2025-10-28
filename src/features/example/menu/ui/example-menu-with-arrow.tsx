import * as React from 'react';
import { Button } from '@/shared/ui/button';
import { Menu } from '@/shared/ui/menu';

export function ExampleMenuWithArrow() {
	const [checked1, setChecked1] = React.useState(false);
	const [checked2, setChecked2] = React.useState(false);
	const [checked3, setChecked3] = React.useState(false);

	return (
		<Menu.Root>
			<Menu.Trigger render={<Button />}>
				With arrow
				<Menu.Icon />
			</Menu.Trigger>
			<Menu.Popup width="250px" align="start" arrow>
				<Menu.CheckboxItem checked={checked1} onCheckedChange={setChecked1}>
					Item 1
				</Menu.CheckboxItem>
				<Menu.CheckboxItem checked={checked2} onCheckedChange={setChecked2}>
					Item 2
				</Menu.CheckboxItem>
				<Menu.CheckboxItem checked={checked3} onCheckedChange={setChecked3}>
					Item 3
				</Menu.CheckboxItem>
			</Menu.Popup>
		</Menu.Root>
	);
}
