import { Button } from '@/shared/ui/components/button';
import { Menu } from '@/shared/ui/components/menu';

export function ExampleNestedMenu() {
	return (
		<Menu.Root>
			<Menu.Trigger render={<Button color="secondary" variant="ghost" radius="3" />}>
				With nested
				<Menu.Icon />
			</Menu.Trigger>
			<Menu.Portal>
				<Menu.Positioner>
					<Menu.Popup minAnchorWidth>
						<Menu.Item label="Item 1">
							<Menu.ItemContent label="Item 1" />
						</Menu.Item>
						<Menu.SubmenuRoot>
							<Menu.SubmenuTrigger>
								<Menu.ItemContent label="Item 2" description="Nested menu 1" />
							</Menu.SubmenuTrigger>
							<Menu.Portal>
								<Menu.Positioner>
									<Menu.Popup>
										<Menu.SubmenuRoot>
											<Menu.SubmenuTrigger>
												<Menu.ItemContent
													label="Item 1"
													description="Nested menu 3"
												/>
											</Menu.SubmenuTrigger>
											<Menu.Portal>
												<Menu.Positioner>
													<Menu.Popup>
														<Menu.Item>Item 1</Menu.Item>
														<Menu.Item>Item 2</Menu.Item>
													</Menu.Popup>
												</Menu.Positioner>
											</Menu.Portal>
										</Menu.SubmenuRoot>
										<Menu.Item>Item 2</Menu.Item>
									</Menu.Popup>
								</Menu.Positioner>
							</Menu.Portal>
						</Menu.SubmenuRoot>
						<Menu.SubmenuRoot>
							<Menu.SubmenuTrigger>
								<Menu.ItemContent label="Item 3" description="Nested menu 2" />
							</Menu.SubmenuTrigger>
							<Menu.Portal>
								<Menu.Positioner>
									<Menu.Popup>
										<Menu.Item>Item 1</Menu.Item>
										<Menu.Item>Item 2</Menu.Item>
									</Menu.Popup>
								</Menu.Positioner>
							</Menu.Portal>
						</Menu.SubmenuRoot>
					</Menu.Popup>
				</Menu.Positioner>
			</Menu.Portal>
		</Menu.Root>
	);
}
