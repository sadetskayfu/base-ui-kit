import { Button, ButtonProvider } from '@/shared/ui/components/button';
import { Flex } from '@/shared/ui/components/flex';
import { Icon } from '@/shared/ui/components/icons';
import { Tooltip, TooltipProvider } from '@/shared/ui/components/tooltip';

export function TooltipSection() {
	return (
		<Flex gap="3">
			<Tooltip
				describeChild
				width="300px"
				content="Текст — зафиксированная на каком-либо материальном носителе человеческая мысль."
			>
				<Button variant='ghost' radius='3'>Tooltip</Button>
			</Tooltip>
			<Flex gap='1'>
				<TooltipProvider>
					<ButtonProvider iconButton variant='ghost' radius='3'>
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
				</TooltipProvider>
			</Flex>
		</Flex>
	);
}
