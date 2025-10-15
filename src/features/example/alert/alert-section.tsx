import { useBreakpoints } from '@/shared/lib/breakpoints';
import { Alert } from '@/shared/ui/alert';
import { Flex } from '@/shared/ui/flex';
import { Grid } from '@/shared/ui/grid';

export function AlertSection() {
	const {xl, lg, md} = useBreakpoints()

	return (
		<Grid columns={xl ? '4' : lg ? '3' : md ? '2' : '1'} gap="3">
			<Flex direction="column" gap="3">
				<Alert.Root radius="3">
					<Alert.Header>
						<Alert.Icon />
						<Alert.Title>Ghost info alert</Alert.Title>
						<Alert.Close />
					</Alert.Header>
					<Alert.Content>
						<Alert.Description>
							Текст, в своем роде, состоит из некоторого количества предложений.
						</Alert.Description>
					</Alert.Content>
				</Alert.Root>
				<Alert.Root radius="3" variant="outlined">
					<Alert.Header>
						<Alert.Icon />
						<Alert.Title>Outlined info alert</Alert.Title>
						<Alert.Close />
					</Alert.Header>
					<Alert.Content>
						<Alert.Description>
							Текст, в своем роде, состоит из некоторого количества предложений.
						</Alert.Description>
					</Alert.Content>
				</Alert.Root>
			</Flex>
			<Flex direction="column" gap="3">
				<Alert.Root severity="success" radius="3">
					<Alert.Header>
						<Alert.Icon />
						<Alert.Title>Ghost success alert</Alert.Title>
						<Alert.Close />
					</Alert.Header>
					<Alert.Content>
						<Alert.Description>
							Текст, в своем роде, состоит из некоторого количества предложений.
						</Alert.Description>
					</Alert.Content>
				</Alert.Root>
				<Alert.Root radius="3" variant="outlined" severity="success">
					<Alert.Header>
						<Alert.Icon />
						<Alert.Title>Outlined success alert</Alert.Title>
						<Alert.Close />
					</Alert.Header>
					<Alert.Content>
						<Alert.Description>
							Текст, в своем роде, состоит из некоторого количества предложений.
						</Alert.Description>
					</Alert.Content>
				</Alert.Root>
			</Flex>
			<Flex direction="column" gap="3">
				<Alert.Root severity="warning" radius="3">
					<Alert.Header>
						<Alert.Icon />
						<Alert.Title>Ghost warning alert</Alert.Title>
						<Alert.Close />
					</Alert.Header>
					<Alert.Content>
						<Alert.Description>
							Текст, в своем роде, состоит из некоторого количества предложений.
						</Alert.Description>
					</Alert.Content>
				</Alert.Root>
				<Alert.Root radius="3" variant="outlined" severity="warning">
					<Alert.Header>
						<Alert.Icon />
						<Alert.Title>Outlined warning alert</Alert.Title>
						<Alert.Close />
					</Alert.Header>
					<Alert.Content>
						<Alert.Description>
							Текст, в своем роде, состоит из некоторого количества предложений.
						</Alert.Description>
					</Alert.Content>
				</Alert.Root>
			</Flex>
			<Flex direction="column" gap="3">
				<Alert.Root severity="error" radius="3">
					<Alert.Header>
						<Alert.Icon />
						<Alert.Title>Ghost error alert</Alert.Title>
						<Alert.Close />
					</Alert.Header>
					<Alert.Content>
						<Alert.Description>
							Текст, в своем роде, состоит из некоторого количества предложений.
						</Alert.Description>
					</Alert.Content>
				</Alert.Root>
				<Alert.Root radius="3" variant="outlined" severity="error">
					<Alert.Header>
						<Alert.Icon />
						<Alert.Title>Outlined error alert</Alert.Title>
						<Alert.Close />
					</Alert.Header>
					<Alert.Content>
						<Alert.Description>
							Текст, в своем роде, состоит из некоторого количества предложений.
						</Alert.Description>
					</Alert.Content>
				</Alert.Root>
			</Flex>
		</Grid>
	);
}
