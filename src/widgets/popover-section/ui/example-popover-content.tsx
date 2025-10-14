import { Button } from '@/shared/ui/components/button';
import { Flex } from '@/shared/ui/components/flex';
import { Popover } from '@/shared/ui/components/popover';

export function ExamplePopoverContent() {
	return (
		<Flex direction="column" gapY="2">
			<Popover.Title align="center">
				Что такое текст?
			</Popover.Title>
			<Popover.Description>
				Текст это зафиксированная на каком-либо материальном носителе человеческая мысль; в
				общем плане связная и полная последовательность символов. Существуют две основные
				трактовки понятия «текст»: имманентная и репрезентативная.
			</Popover.Description>
			<Flex ml="auto" mt="2">
				<Popover.Close
					render={<Button variant="ghost" color="secondary" radius="2" size="2" />}
				>
					Закрыть
				</Popover.Close>
			</Flex>
		</Flex>
	);
}
