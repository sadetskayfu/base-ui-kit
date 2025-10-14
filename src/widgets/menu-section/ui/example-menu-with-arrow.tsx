import { Button } from '@/shared/ui/components/button';
import { Icon } from '@/shared/ui/components/icons';
import { Menu } from '@/shared/ui/components/menu';

export function ExampleMenuWithArrow() {
	return (
		<Menu.Root>
			<Menu.Trigger render={<Button color="accent" variant="ghost" radius="3" animateBorder />}>
				With arrow
				<Menu.Icon />
			</Menu.Trigger>
			<Menu.Portal>
				<Menu.Positioner align="start" arrow>
					<Menu.Popup width="250px">
						<Menu.Arrow />
						<Menu.CheckboxItem>
							<Menu.ItemContent
								label="Item 1"
								description="Description"
								icon={<Icon.UserRound />}
								iconPadding
							/>
						</Menu.CheckboxItem>
						<Menu.CheckboxItem>
							<Menu.ItemContent
								label="Item 2"
								icon={<Icon.CircleCheckBig />}
								iconPadding
							/>
						</Menu.CheckboxItem>
						<Menu.CheckboxItem>
							<Menu.ItemContent
								label="Item 3"
								description="Description"
								iconPadding
							/>
						</Menu.CheckboxItem>
					</Menu.Popup>
				</Menu.Positioner>
			</Menu.Portal>
		</Menu.Root>
	);
}
