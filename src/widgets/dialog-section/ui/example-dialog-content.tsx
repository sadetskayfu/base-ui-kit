import { Button, ButtonProvider } from '@/shared/ui/components/button';
import { Dialog } from '@/shared/ui/components/dialog';
import { Flex } from '@/shared/ui/components/flex';

export function ExampleDialogContent({ children }: { children?: React.ReactNode }) {
	return (
		<Flex direction="column" gapY="2">
			<Dialog.Title align="center">
				Что такое текст?
			</Dialog.Title>
			<Dialog.Description>
				Текст это зафиксированная на каком-либо материальном носителе человеческая мысль; в
				общем плане связная и полная последовательность символов. Существуют две основные
				трактовки понятия «текст»: имманентная и репрезентативная.
			</Dialog.Description>
			<Flex ml="auto" mt="2" gap='2'>
				<ButtonProvider variant="ghost" color="secondary" radius="2" size="2">
					{children}
					<Dialog.Close render={<Button />}>Закрыть</Dialog.Close>
				</ButtonProvider>
			</Flex>
		</Flex>
	);
}
