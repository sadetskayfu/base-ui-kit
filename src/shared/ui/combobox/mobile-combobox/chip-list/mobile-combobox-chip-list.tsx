import { ScrollArea } from '@/shared/ui/scroll-area';
import { BaseCombobox } from '../../base';
import { Chip, ChipProvider } from '@/shared/ui/chip';
import styles from './mobile-combobox-chip-list.module.scss';

export function MobileComboboxChipList({ children, placeholder }: MobileComboboxChipList.Props) {
	return (
		<ScrollArea.Root orientation="horizontal" overflowShadow scrollbarMargin={false}>
			<ScrollArea.Content className={styles['chips']}>
				<ChipProvider radius="full" size="2">
					<BaseCombobox.Clear
						render={
							<Chip.Root
								disableRipple={false}
								nativeButton
								interactive
								render={<button />}
							/>
						}
					>
						<Chip.Label>Очистить</Chip.Label>
					</BaseCombobox.Clear>
					<BaseCombobox.Value>
						{(value: any[]) => {
							if (value.length > 0) {
								return children(value);
							}
							return (
								<Chip.Root>
									<Chip.Label>{placeholder}</Chip.Label>
								</Chip.Root>
							);
						}}
					</BaseCombobox.Value>
				</ChipProvider>
			</ScrollArea.Content>
		</ScrollArea.Root>
	);
}

export namespace MobileComboboxChipList {
	export interface Props {
		children: (value: any) => React.ReactNode;
		placeholder: string;
	}
}
