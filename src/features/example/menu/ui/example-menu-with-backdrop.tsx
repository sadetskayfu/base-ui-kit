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
					Item 1
				</Menu.Item>
				<Menu.Item>
					Item 2
				</Menu.Item>
				<Menu.Item>
					Item 3
				</Menu.Item>
			</Menu.Popup>
		</Menu.Root>
	);
}
