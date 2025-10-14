import { Dialog } from '@/shared/ui/components/dialog';
import { Button } from '@/shared/ui/components/button';
import { Separator } from '@/shared/ui/components/separator';

export function ExampleDialog() {
	return (
		<Dialog.Root>
			<Dialog.Trigger render={<Button variant="ghost" color="secondary" radius="3" />}>
				Dialog
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Backdrop />
				<Dialog.Popup>
					<Dialog.Header>
						<Dialog.Title>Title</Dialog.Title>
                        <Dialog.HeaderClose />
					</Dialog.Header>
                    
					<Dialog.Description>
						Текст это зафиксированная на каком-либо материальном носителе человеческая
						мысль; в общем плане связная и полная последовательность символов.
						Существуют две основные трактовки понятия «текст»: имманентная и
						репрезентативная.
					</Dialog.Description>
				</Dialog.Popup>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
