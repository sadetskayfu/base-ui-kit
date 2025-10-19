import * as React from 'react';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
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
			<Menu.Popup width="250px" align='start' arrow>
				<Menu.CheckboxItem label="Item 1" checked={checked1} onCheckedChange={setChecked1}>
					<Menu.ItemContent
						label="Item 1"
						description="Description"
						icon={<Icon.UserRound />}
						iconPadding
					/>
				</Menu.CheckboxItem>
				<Menu.CheckboxItem label="Item 2" checked={checked2} onCheckedChange={setChecked2}>
					<Menu.ItemContent label="Item 2" icon={<Icon.CircleCheckBig />} iconPadding />
				</Menu.CheckboxItem>
				<Menu.CheckboxItem label="Item 3" checked={checked3} onCheckedChange={setChecked3}>
					<Menu.ItemContent label="Item 3" description="Description" iconPadding />
				</Menu.CheckboxItem>
			</Menu.Popup>
		</Menu.Root>
	);
}
