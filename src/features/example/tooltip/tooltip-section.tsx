import { Button, ButtonProvider } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import { Icon } from '@/shared/ui/icons';
import { Tooltip } from '@/shared/ui/tooltip';
import { TooltipGroup } from '@/shared/ui/tooltip-group';

export function TooltipSection() {
	return (
		<Flex gap="3" justify="center">
			<Tooltip
				describeChild
				content="Текст — зафиксированная на каком-либо материальном носителе человеческая мысль."
				width='200px'
			>
				<Button variant="ghost" radius="3" color="secondary">
					Tooltip
				</Button>
			</Tooltip>
			<Flex gap="1">
				<TooltipGroup>
					<ButtonProvider iconButton variant="ghost" radius="3" color="secondary">
						<Tooltip content="Info">
							<Button aria-label="Info">
								<Icon.Info />
							</Button>
						</Tooltip>
						<Tooltip content="Left">
							<Button aria-label="Left">
								<Icon.MoveLeft />
							</Button>
						</Tooltip>
						<Tooltip content="User">
							<Button aria-label="User">
								<Icon.UserRound />
							</Button>
						</Tooltip>
					</ButtonProvider>
				</TooltipGroup>
			</Flex>
		</Flex>
	);
}
