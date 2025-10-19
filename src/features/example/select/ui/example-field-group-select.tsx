import { groupedUsers, type User } from '@/entities/options/users';
import { Avatar } from '@/shared/ui/avatar';
import { ButtonField } from '@/shared/ui/button-field';
import { Flex } from '@/shared/ui/flex';
import { Select } from '@/shared/ui/select';
import { Text } from '@/shared/ui/text';

export function ExampleFieldGroupSelect() {
	return (
		<Select.Root multiple>
			<Flex direction="column" gapY="1">
				<Text weight="medium">Group select</Text>
				<Select.Trigger render={<ButtonField radius='3' />}>
					<Select.MultiValue
						placeholder="Select users"
						getLabel={(user: User) => `${user.firstName.charAt(0)}. ${user.lastName}`}
						renderLabel={label => <Text color="hard">{label}</Text>}
					/>
					<Select.Icon />
				</Select.Trigger>
			</Flex>
			<Select.Popup>
				<Select.ScrollArea withStickyGroupLabel>
					<Select.List>
						{groupedUsers.map(group => (
							<Select.Group key={group.value}>
								<Select.StickyGroupLabel>{group.value}</Select.StickyGroupLabel>
								{group.users.map(user => (
									<Select.CheckboxItem
										key={user.id}
										value={user}
										visualMargin="1"
									>
										<Avatar
											size="2"
											radius="circular"
											variant="solid"
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
		</Select.Root>
	);
}
