import { Button } from '@/shared/ui/button';
import { Menu } from '@/shared/ui/menu';

export function ExampleNestedMenu() {
	return (
		<Menu.Root>
			<Menu.Trigger render={<Button />}>
				With nested
				<Menu.Icon />
			</Menu.Trigger>
			<Menu.Popup width="200px" align="start">
				<Menu.Item label="Item 1">
					Item 1
				</Menu.Item>
				<Menu.SubmenuRoot>
					<Menu.SubmenuTrigger>
						Nested menu 1
					</Menu.SubmenuTrigger>
					<Menu.Popup>
						<Menu.Item>Item 1</Menu.Item>
						<Menu.Item>Item 2</Menu.Item>
					</Menu.Popup>
				</Menu.SubmenuRoot>
				<Menu.SubmenuRoot>
					<Menu.SubmenuTrigger>
						Nested menu 2
					</Menu.SubmenuTrigger>
					<Menu.Popup>
						<Menu.Item>Item 1</Menu.Item>
						<Menu.Item>Item 2</Menu.Item>
					</Menu.Popup>
				</Menu.SubmenuRoot>
			</Menu.Popup>
		</Menu.Root>
	);
}
