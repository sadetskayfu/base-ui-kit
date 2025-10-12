import * as React from 'react';
import { groupedUsers, type User } from '@/entities/options/users';
import { Avatar } from '@/shared/ui/components/avatar';
import { Flex } from '@/shared/ui/components/flex';
import { Select } from '@/shared/ui/components/select';
import { Text } from '@/shared/ui/components/text';

export function ExampleGroupSelect() {
	const [value, setValue] = React.useState<User[]>([]);
	const [error, setError] = React.useState<string>('');

	return (
		<Select.Root
			value={value}
			onValueChange={value => {
				setValue(value);

				if (value.length > 2) {
					setError('Max users count is 2');
				} else {
					setError('');
				}
			}}
			errored={Boolean(error)}
			multiple
		>
			<Flex direction="column" gapY="1">
				<Select.Label>Field group select</Select.Label>
				<Select.Field radius="3">
					<Select.Value className="truncate">
						{(value: User[]) => {
							if (value.length === 0) {
								return `Select users...`
							}

                            const labels = value.map((user) => `${user.firstName.charAt(0)}. ${user.lastName}`)

                            return <Text color='hard' truncate>{labels.join(', ')}</Text>
						}}
					</Select.Value>
					<Select.Icon />
				</Select.Field>
				{error && <Select.HelperText color="error-soft">{error}</Select.HelperText>}
			</Flex>
			<Select.Portal>
				<Select.Positioner>
					<Select.Popup>
						<Select.ScrollArea
							withStickyGroupLabel
							alwaysVisibleScrollbar
							maxHeight="400px"
						>
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
