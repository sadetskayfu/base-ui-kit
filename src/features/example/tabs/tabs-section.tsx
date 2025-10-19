import { Flex } from '@/shared/ui/flex';
import { Tabs } from '@/shared/ui/tabs';
import { Text } from '@/shared/ui/text';

export function TabsSection() {
	return (
		<Flex direction="column" gap="5">
			<Tabs.Root p="1" radius="4" gap="1" bgColor="grey-2" direction="column">
				<Tabs.List>
					<Tabs.Tab>Tab 1</Tabs.Tab>
					<Tabs.Tab>Tab 2</Tabs.Tab>
					<Tabs.Tab disabled>Tab 3</Tabs.Tab>
					<Tabs.Tab>Tab 4</Tabs.Tab>
					<Tabs.Indicator />
				</Tabs.List>
				<Tabs.Panel p="4" radius="3" bgColor="grey-1">
					<Tabs.PanelContent>Panel 1</Tabs.PanelContent>
				</Tabs.Panel>
				<Tabs.Panel p="4" radius="3" bgColor="grey-1">
					<Tabs.PanelContent>Panel 2</Tabs.PanelContent>
				</Tabs.Panel>
				<Tabs.Panel p="4" radius="3" bgColor="grey-1">
					<Tabs.PanelContent>Panel 3</Tabs.PanelContent>
				</Tabs.Panel>
				<Tabs.Panel p="4" radius="3" bgColor="grey-1">
					<Tabs.PanelContent>Panel 4</Tabs.PanelContent>
				</Tabs.Panel>
			</Tabs.Root>

			<Tabs.Root
				p="1"
				radius="4"
				gap="1"
				bgColor="grey-2"
				panelPosition="top"
				direction="column"
			>
				<Tabs.Panel p="4" radius="3" bgColor="grey-1">
					<Tabs.PanelContent>Panel 1</Tabs.PanelContent>
				</Tabs.Panel>
				<Tabs.Panel p="4" radius="3" bgColor="grey-1">
					<Tabs.PanelContent>Panel 2</Tabs.PanelContent>
				</Tabs.Panel>
				<Tabs.Panel p="4" radius="3" bgColor="grey-1">
					<Tabs.PanelContent>Panel 3</Tabs.PanelContent>
				</Tabs.Panel>
				<Tabs.Panel p="4" radius="3" bgColor="grey-1">
					<Tabs.PanelContent>Panel 4</Tabs.PanelContent>
				</Tabs.Panel>
				<Tabs.List>
					<Tabs.Tab flexGrow="1">Tab 1</Tabs.Tab>
					<Tabs.Tab flexGrow="1">Tab 2</Tabs.Tab>
					<Tabs.Tab flexGrow="1" disabled>
						Tab 3
					</Tabs.Tab>
					<Tabs.Tab flexGrow="1">Tab 4</Tabs.Tab>
					<Tabs.Indicator />
				</Tabs.List>
			</Tabs.Root>

			<Tabs.Root
				gap="1"
				panelPosition="left"
				orientation="vertical"
				bgColor="grey-2"
				radius="4"
				p="1"
			>
				<Tabs.Panel p="4" radius="3" bgColor="grey-1">
					<Tabs.PanelContent>
						<Text color="hard">Panel 1</Text>
						<Text tag="p">
							Проверка текста на уникальность по всем системам. Бесплатно проверить
							уникальность. все системы в одном месте. бесплатная проверка.
							круглосуточная работа. круглосуточная поддержка
						</Text>
					</Tabs.PanelContent>
				</Tabs.Panel>
				<Tabs.Panel p="4" radius="3" bgColor="grey-1">
					<Tabs.PanelContent>
						<Text color="hard">Panel 2</Text>
						<Text tag="p">
							Проверка текста на уникальность по всем системам. Бесплатно проверить
							уникальность. все системы в одном месте. бесплатная проверка.
							круглосуточная работа. круглосуточная поддержка
						</Text>
					</Tabs.PanelContent>
				</Tabs.Panel>
				<Tabs.Panel p="4" radius="3" bgColor="grey-1">
					<Tabs.PanelContent>
						<Text color="hard">Panel 3</Text>
						<Text tag="p">
							Проверка текста на уникальность по всем системам. Бесплатно проверить
							уникальность. все системы в одном месте. бесплатная проверка.
							круглосуточная работа. круглосуточная поддержка.
						</Text>
					</Tabs.PanelContent>
				</Tabs.Panel>
				<Tabs.List direction="column" minWidth="150px">
					<Tabs.Tab>Tab 1</Tabs.Tab>
					<Tabs.Tab>Tab 2</Tabs.Tab>
					<Tabs.Tab>Tab 3</Tabs.Tab>
					<Tabs.Indicator />
				</Tabs.List>
			</Tabs.Root>
			<Tabs.Root gap="1" panelPosition="right" orientation="vertical">
				<Tabs.List direction="column" minWidth="150px">
					<Tabs.Tab>Tab 1</Tabs.Tab>
					<Tabs.Tab>Tab 2</Tabs.Tab>
					<Tabs.Tab>Tab 3</Tabs.Tab>
					<Tabs.Indicator />
				</Tabs.List>
				<Tabs.Panel p="4" radius="3" bgColor="grey-2">
					<Tabs.PanelContent>
						<Text color="hard">Panel 1</Text>
						<Text tag="p">
							Проверка текста на уникальность по всем системам. Бесплатно проверить
							уникальность. все системы в одном месте. бесплатная проверка.
							круглосуточная работа. круглосуточная поддержка
						</Text>
					</Tabs.PanelContent>
				</Tabs.Panel>
				<Tabs.Panel p="4" radius="3" bgColor="grey-2">
					<Tabs.PanelContent>
						<Text color="hard">Panel 2</Text>
						<Text tag="p">
							Проверка текста на уникальность по всем системам. Бесплатно проверить
							уникальность. все системы в одном месте. бесплатная проверка.
							круглосуточная работа. круглосуточная поддержка
						</Text>
					</Tabs.PanelContent>
				</Tabs.Panel>
				<Tabs.Panel p="4" radius="3" bgColor="grey-2">
					<Tabs.PanelContent>
						<Text color="hard">Panel 3</Text>
						<Text tag="p">
							Проверка текста на уникальность по всем системам. Бесплатно проверить
							уникальность. все системы в одном месте. бесплатная проверка.
							круглосуточная работа. круглосуточная поддержка.
						</Text>
					</Tabs.PanelContent>
				</Tabs.Panel>
			</Tabs.Root>
		</Flex>
	);
}
