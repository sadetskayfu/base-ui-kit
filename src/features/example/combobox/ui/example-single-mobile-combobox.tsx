import * as React from 'react';
import { fruits } from '@/entities/options/fruits';
import { Button } from '@/shared/ui/button';
import { MobileCombobox } from '@/shared/ui/combobox';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';
import styles from './m.module.scss';

export function ExampleSingleMobileCombobox() {
	return (
		<MobileCombobox.Root items={fruits} modal>
			<Flex direction="column" gapY="1">
				<Text weight="medium">Single mobile MobileCombobox</Text>
				<MobileCombobox.Trigger
					render={<Button size="4" variant="ghost" color="accent" radius="3" />}
				>
					<MobileCombobox.Value>
						{(value: string | null) => {
							if (value) {
								return value;
							}
							return `Select fruit`;
						}}
					</MobileCombobox.Value>
				</MobileCombobox.Trigger>
			</Flex>
			<MobileCombobox.Popup>
				<MobileCombobox.Header title="Fruit" />
				<MobileCombobox.Field />
				<MobileCombobox.ScrollArea>
					<MobileCombobox.Empty className={styles['empty']}>
						Not fruits found
					</MobileCombobox.Empty>
					<MobileCombobox.List>
						{(item: string) => (
							<MobileCombobox.RadioItem
								key={item}
								value={item}
								radius="3"
								visualMargin="2"
							>
								{item}
							</MobileCombobox.RadioItem>
						)}
					</MobileCombobox.List>
				</MobileCombobox.ScrollArea>
			</MobileCombobox.Popup>
		</MobileCombobox.Root>
	);
}
