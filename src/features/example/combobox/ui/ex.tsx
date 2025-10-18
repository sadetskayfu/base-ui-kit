import * as React from 'react';
import { fruits } from '@/entities/options/fruits';
import { Button } from '@/shared/ui/button';
import { Combobox } from '@/shared/ui/combobox';
import { Field } from '@/shared/ui/field';
import { Flex } from '@/shared/ui/flex';
import { FullScreenPopup } from '@/shared/ui/full-screen-popup/root/full-screen-popup-root';
import { Text } from '@/shared/ui/text';
import { Icon } from '@/shared/ui/icons';
import styles from './m.module.scss';

export function ExampleSingleMobileCombobox() {
	const [open, setOpen] = React.useState<boolean>(false);

	return (
		<Combobox.Root open={open} onOpenChange={setOpen} items={fruits} modal>
			<div className={styles['trigger-container']}>
				Fruit
				<Combobox.Trigger className={styles['trigger']}>
					<Combobox.Value>
						{(value: string | null) => {
							if (value) {
								return value;
							}
							return `Select fruit`;
						}}
					</Combobox.Value>
				</Combobox.Trigger>
			</div>
			<Combobox.Portal>
				<Combobox.Positioner render={({ style, ...props }) => <div {...props} />}>
					<Combobox.Popup className={styles['popup']}>
						<div className={styles['header']}>
							<button
								className={styles['close-button']}
								aria-label="Close popup"
								onClick={() => setOpen(false)}
							>
								{'<-'}
							</button>
							<h3>Fruit</h3>
						</div>
						<Combobox.Input className={styles['input']}/>
						<Combobox.Empty className={styles['empty']}>
							Not fruits found
						</Combobox.Empty>
						<Combobox.List>
							{(item: string) => (
								<Combobox.Item
									key={item}
									value={item}
                                    className={styles['item']}
								>
									{item}
                                    <Combobox.ItemIndicator>
                                        v
                                    </Combobox.ItemIndicator>
								</Combobox.Item>
							)}
						</Combobox.List>
					</Combobox.Popup>
				</Combobox.Positioner>
			</Combobox.Portal>
		</Combobox.Root>
	);
}
