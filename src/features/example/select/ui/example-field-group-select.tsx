import { groupedUsers, type User } from '@/entities/options/users';
import { Avatar } from '@/shared/ui/avatar';
import { Flex } from '@/shared/ui/flex';
import { Select } from '@/shared/ui/select';

export function ExampleFieldGroupSelect() {
	return (
		<Select.Root
			multiple
		>
			<Flex direction="column" gapY="1">
				<Select.Label>Field group select</Select.Label>
				<Select.Field radius="3">
					<Select.Value placeholder='Select users..' truncate>
						{(value: User[]) => {
							const labels = value.map(
								user => `${user.firstName.charAt(0)}. ${user.lastName}`
							);

							return labels.join(', ');
						}}
					</Select.Value>
					<Select.Icon />
				</Select.Field>
			</Flex>
			<Select.Portal>
				<Select.Positioner>
					<Select.Popup>
						<Select.ScrollArea withStickyGroupLabel>
							<Select.List>
								{groupedUsers.map(group => (
									<Select.Group key={group.value}>
										<Select.StickyGroupLabel>
											{group.value}
										</Select.StickyGroupLabel>
										{group.users.map(user => (
											<Select.CheckboxItem
												key={user.id}
												value={user}
												visualMargin="1"
												disableRipple
											>
												<Avatar
													size="2"
													radius="circular"
                                                    variant='solid'
													src={user.avatar}
													fallback={`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}
												/>
												{user.firstName} {user.lastName}
											</Select.CheckboxItem>
										))}
									</Select.Group>
								))}
							</Select.List>
						</Select.ScrollArea>
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
		</Select.Root>
	);
}
