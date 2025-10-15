import * as React from 'react';
import { groupedUsers, type User, type UserGroup } from '@/entities/options/users';
import { Avatar } from '@/shared/ui/avatar';
import { FieldCombobox as Combobox } from '@/shared/ui/combobox';
import { Flex } from '@/shared/ui/flex';
import { Icon } from '@/shared/ui/icons';

export function ExampleGroupCombobox() {
	const [value, setValue] = React.useState<User[]>([]);

	return (
		<Combobox.Root
			items={groupedUsers}
			itemToStringLabel={group => `${group.users[0].firstName} ${group.users[0].lastName}`}
			value={value}
			onValueChange={setValue}
			multiple
		>
			<Flex direction="column" gapY="1">
				<Combobox.Label>Group combobox</Combobox.Label>
				<Combobox.InputContainer radius="3">
					<Combobox.Chips>
						<Combobox.Value>
							{(values: User[]) =>
								values.map(value => (
									<Combobox.Chip key={value.id} size="1">
										<Combobox.ChipAvatar
											src={value.avatar}
											fallback={<Icon.UserRound />}
										/>
										<Combobox.ChipLabel>{`${value.firstName.charAt(0)}. ${value.lastName}`}</Combobox.ChipLabel>
									</Combobox.Chip>
								))
							}
						</Combobox.Value>
						<Combobox.MultiInput placeholder="Input user name.." />
					</Combobox.Chips>
				</Combobox.InputContainer>
			</Flex>
			<Combobox.Portal>
				<Combobox.Positioner>
					<Combobox.Popup>
						<Combobox.ScrollArea
							withStickyGroupLabel
						>
							<Combobox.Empty>User not found</Combobox.Empty>
							<Combobox.List>
								{(group: UserGroup) => (
									<Combobox.Group key={group.value} items={group.users}>
										<Combobox.StickyGroupLabel>
											{group.value}
										</Combobox.StickyGroupLabel>
										<Combobox.Collection>
											{(user: User) => (
												<Combobox.CheckboxItem
													key={user.id}
													value={user}
													visualMargin="1"
												>
													<Avatar
														size="2"
														variant="solid"
														radius="circular"
														src={user.avatar}
														fallback={<Icon.UserRound />}
													/>
													{user.firstName} {user.lastName}
												</Combobox.CheckboxItem>
											)}
										</Combobox.Collection>
									</Combobox.Group>
								)}
							</Combobox.List>
						</Combobox.ScrollArea>
					</Combobox.Popup>
				</Combobox.Positioner>
			</Combobox.Portal>
		</Combobox.Root>
	);
}
