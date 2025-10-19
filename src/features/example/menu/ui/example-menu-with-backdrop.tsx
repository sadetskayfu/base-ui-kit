import { Button } from '@/shared/ui/button';
import { Menu } from '@/shared/ui/menu';

export function ExampleMenuWithBackdrop() {
	return (
		<Menu.Root modal>
			<Menu.Trigger render={<Button />}>
				With backdrop
				<Menu.Icon />
			</Menu.Trigger>
			<Menu.Popup width="250px" align='start' backdrop>
				<Menu.Item>
					<Menu.ItemContent label="Item 1" description="Description" />
				</Menu.Item>
				<Menu.Item>
					<Menu.ItemContent label="Item 2" />
				</Menu.Item>
				<Menu.Item>
					<Menu.ItemContent label="Item 3" description="Description" />
				</Menu.Item>
			</Menu.Popup>
		</Menu.Root>
	);
}
