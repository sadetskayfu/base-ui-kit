import { Badge } from '@/shared/ui/badge';
import { Button, ButtonProvider } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import { Icon } from '@/shared/ui/icons';
import { InfoBadge } from '@/shared/ui/info-badge';

export function BadgeSection() {
	return (
		<Flex direction="column" gap="4" align="center">
			<Flex gap="2">
				<InfoBadge size="1" radius="2">
					5
				</InfoBadge>
				<InfoBadge size="1" radius="2" color="accent" max={999}>
					5312
				</InfoBadge>
				<InfoBadge size="1" radius="2" color="green">
					New
				</InfoBadge>
				<InfoBadge size="1" radius="2" color="red">
					New
				</InfoBadge>
			</Flex>
			<Flex gap="4">
				<ButtonProvider radius="circular" variant="ghost" color="secondary" iconButton>
					<Badge content={1} borderColor="grey-1">
						<Button>
							<Icon.UserRound />
						</Button>
					</Badge>
					<Badge content={12} max={9} borderColor="grey-1">
						<Button>
							<Icon.UserRound />
						</Button>
					</Badge>
					<Badge content={582} borderColor="grey-1" color="red">
						<Button>
							<Icon.UserRound />
						</Button>
					</Badge>
					<Badge content="New" borderColor="grey-1" color="green">
						<Button>
							<Icon.UserRound />
						</Button>
					</Badge>
					<Badge
						borderColor="grey-1"
						color="green"
						size="1"
						position="bottom-right"
						visible
					>
						<Button>
							<Icon.UserRound />
						</Button>
					</Badge>
				</ButtonProvider>
			</Flex>
			<Flex gap="4">
				<ButtonProvider radius="2" iconButton variant="ghost">
					<Badge content={5} borderColor="grey-1" overlap="square">
						<Button>
							<Icon.UserRound />
						</Button>
					</Badge>
					<Badge content={12} max={9} borderColor="grey-1" overlap="square">
						<Button>
							<Icon.UserRound />
						</Button>
					</Badge>
					<Badge content={582} borderColor="grey-1" overlap="square" color="red">
						<Button>
							<Icon.UserRound />
						</Button>
					</Badge>
					<Badge content="New" borderColor="grey-1" overlap="square" color="green">
						<Button>
							<Icon.UserRound />
						</Button>
					</Badge>
				</ButtonProvider>
			</Flex>
		</Flex>
	);
}
