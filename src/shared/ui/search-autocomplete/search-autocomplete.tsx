import * as React from 'react'
import { Autocomplete } from '../components/autocomplete';
import { Button, ButtonProvider } from '../components/button';
import { Field } from '../components/field';
import { Flex } from '../components/flex';
import { Icon } from '../components/icons';
import { getGroupLabel, type ItemGroup, type Item } from './items';

export function SearchAutocomplete() {
    const [searchValue, setSearchValue] = React.useState<string>('')
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [searchResults, setSearchResults] = React.useState<Item[]>([]);

	return (
		<Flex>
			<Autocomplete.Root>
				<Field.Root>
					<Field.InputContainer radius="full">
						<Field.Input
							placeholder="Найти на DimaPlace"
							render={<Autocomplete.Input />}
						/>
						<Field.Slot side="right">
							<ButtonProvider variant='clear' iconButton radius='circular' size='3' color='secondary-soft'>
								<Autocomplete.Clear
									aria-label="Очистить поле ввода"
									render={<Button />}
								>
									<Icon.X />
								</Autocomplete.Clear>
								<Autocomplete.Trigger
									aria-label="Открыть всплывающее окно"
									render={<Button />}
								>
									<Icon.ChevronDown />
								</Autocomplete.Trigger>
							</ButtonProvider>
						</Field.Slot>
					</Field.InputContainer>
				</Field.Root>
				<Autocomplete.Portal>
					<Autocomplete.Positioner>
						<Autocomplete.Popup>
							<Autocomplete.ScrollArea>
								<Autocomplete.Empty>
									По вашему запросу не найдено ниодного товара.
								</Autocomplete.Empty>
								<Autocomplete.List>
									{(group: ItemGroup) => (
										<Autocomplete.Group key={group.value}>
											<Autocomplete.GroupLabel>
												{getGroupLabel(group.value)}
											</Autocomplete.GroupLabel>
											<Autocomplete.Collection>
												{(item: Item) => (
													<Autocomplete.Item
														key={item.value}
														value={item}
													>
														{item.value}
													</Autocomplete.Item>
												)}
											</Autocomplete.Collection>
										</Autocomplete.Group>
									)}
								</Autocomplete.List>
							</Autocomplete.ScrollArea>
						</Autocomplete.Popup>
					</Autocomplete.Positioner>
				</Autocomplete.Portal>
			</Autocomplete.Root>
			<Button>P</Button>
		</Flex>
	);
}
