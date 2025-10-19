import { ScrollArea } from '@/shared/ui/scroll-area';
import { BaseCombobox } from '../../base';
import { Chip, ChipProvider } from '@/shared/ui/chip';
import styles from './mobile-combobox-chip-list.module.scss'

export function MobileComboboxChipList({ children }: MobileComboboxChipList.Props) {
	return (
		<ScrollArea.Root orientation="horizontal" overflowShadow hiddenScrollbar>
			<ScrollArea.Content className={styles['chips']} >
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
						{children}
					</BaseCombobox.Value>
				</ChipProvider>
			</ScrollArea.Content>
		</ScrollArea.Root>
	);
}

export namespace MobileComboboxChipList {
	export interface Props {
		children: (value: any) => React.ReactNode;
	}
}
