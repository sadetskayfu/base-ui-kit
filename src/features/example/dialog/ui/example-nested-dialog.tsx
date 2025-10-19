import { Button, ButtonProvider } from '@/shared/ui/button';
import { Dialog } from '@/shared/ui/dialog';
import { Flex } from '@/shared/ui/flex';

export function ExampleNestedDialog() {
	return (
		<Dialog.Root>
			<Dialog.Trigger render={<Button radius="3" />}>Nested dialog</Dialog.Trigger>
			<Dialog.Popup backdrop>
				<Flex direction="column" gap="2">
					<Dialog.Title>Генератор</Dialog.Title>
					<Dialog.Description>
						Генератор случайного текста онлайн. В основе данного скрипта для
						производства текста рыбы лежит универсальный код составления речей.
					</Dialog.Description>
					<Flex gap="2" mt="2" ml="auto">
						<ButtonProvider radius="2">
							<Dialog.Root>
								<Dialog.Trigger render={<Button variant="filled" />}>
									Вложенный
								</Dialog.Trigger>
								<Dialog.Popup>
									<Flex direction="column" gap="2">
										<Dialog.Title>Генератор</Dialog.Title>
										<Dialog.Description>
											Генератор случайного текста онлайн. В основе данного
											скрипта для производства текста рыбы лежит универсальный
											код составления речей.
										</Dialog.Description>
										<Dialog.Close
											render={
												<Button
													ml="auto"
													mt="2"
													radius="2"
													variant="ghost"
												/>
											}
										>
											Закрыть
										</Dialog.Close>
									</Flex>
								</Dialog.Popup>
							</Dialog.Root>
							<Dialog.Close render={<Button variant="ghost" />}>Закрыть</Dialog.Close>
						</ButtonProvider>
					</Flex>
				</Flex>
			</Dialog.Popup>
		</Dialog.Root>
	);
}
