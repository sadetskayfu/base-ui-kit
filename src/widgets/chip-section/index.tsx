import { Accordion } from '@/shared/ui/components/accordion';
import { Chip, ChipProvider } from '@/shared/ui/components/chip';
import { Flex } from '@/shared/ui/components/flex';

export function ChipSection() {
	return (
		<Accordion.Item title="Chip">
			<Flex gap="2" align="center">
				<ChipProvider radius="1" size="2">
					<Chip.Root color="accent">
						<Chip.Avatar fallback="Y" />
						<Chip.Label>Accent</Chip.Label>
						<Chip.Close />
					</Chip.Root>
					<Chip.Root color="secondary">
						<Chip.Avatar fallback="Y" />
						<Chip.Label>Secondary</Chip.Label>
						<Chip.Close />
					</Chip.Root>
				</ChipProvider>
				<ChipProvider radius="1" size="1">
					<Chip.Root color="accent">
						<Chip.Avatar fallback="Y" />
						<Chip.Label>Accent</Chip.Label>
						<Chip.Close />
					</Chip.Root>
					<Chip.Root color="secondary">
						<Chip.Avatar fallback="Y" />
						<Chip.Label>Secondary</Chip.Label>
						<Chip.Close />
					</Chip.Root>
				</ChipProvider>
			</Flex>
			<Flex gap="2" align="center" mt="2">
				<ChipProvider radius="full" size="2">
					<Chip.Root color="accent">
						<Chip.Avatar fallback="Y" />
						<Chip.Label>Accent</Chip.Label>
						<Chip.Close />
					</Chip.Root>
					<Chip.Root color="secondary">
						<Chip.Avatar fallback="Y" />
						<Chip.Label>Secondary</Chip.Label>
						<Chip.Close />
					</Chip.Root>
				</ChipProvider>
				<ChipProvider radius="full" size="1">
					<Chip.Root color="accent">
						<Chip.Avatar fallback="Y" />
						<Chip.Label>Accent</Chip.Label>
						<Chip.Close />
					</Chip.Root>
					<Chip.Root color="secondary">
						<Chip.Avatar fallback="Y" />
						<Chip.Label>Secondary</Chip.Label>
						<Chip.Close />
					</Chip.Root>
				</ChipProvider>
			</Flex>
			<Flex gap="2" mt="2">
				<Chip.Root interactive disableRipple={false} render={<button />}>
					<Chip.Avatar fallback="YI" />
					<Chip.Label>Button</Chip.Label>
				</Chip.Root>
				<Chip.Root
					interactive
					disableRipple={false}
					disableRippleSpaceKey
					render={<a href="/" />}
				>
					<Chip.Avatar fallback="YI" />
					<Chip.Label>Link</Chip.Label>
				</Chip.Root>
				<Chip.Root disabled interactive disableRipple={false} render={<button />}>
					<Chip.Avatar fallback="YI" />
					<Chip.Label>Disabled</Chip.Label>
				</Chip.Root>
			</Flex>
		</Accordion.Item>
	);
}
