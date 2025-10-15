import * as React from 'react';
import { Checkbox } from '@/shared/ui/checkbox';
import { CheckboxGroup } from '@/shared/ui/checkbox-group';
import { Flex } from '@/shared/ui/flex';
import { FormControlLabel } from '@/shared/ui/form-control-label';
import { FormLabel } from '@/shared/ui/form-label';

const items = [
	{ value: 'checkbox1', label: 'Checkbox 1' },
	{ value: 'checkbox2', label: 'Checkbox 2' },
	{ value: 'checkbox3', label: 'Checkbox 3' },
];

export function CheckboxSection() {
	const [value, setValue] = React.useState([]);

	return (
		<Flex direction="column" align="center">
			<CheckboxGroup.Root
				value={value}
				onValueChange={setValue}
				allValues={items.map(item => item.value)}
				render={<Flex direction="column" gapY="1" />}
			>
				<FormControlLabel>
					<Checkbox parent />
					<FormLabel>All</FormLabel>
				</FormControlLabel>
				{items.map(item => (
					<FormControlLabel key={item.value}>
						<Checkbox value={item.value} />
						<FormLabel weight="light">{item.label}</FormLabel>
					</FormControlLabel>
				))}
			</CheckboxGroup.Root>
		</Flex>
	);
}
