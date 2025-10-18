import * as React from 'react';
import { Checkbox } from '@/shared/ui/checkbox';
import { CheckboxGroup } from '@/shared/ui/checkbox-group';
import { Flex } from '@/shared/ui/flex';
import { FormControlLabel } from '@/shared/ui/form-control-label';
import { FormLabel } from '@/shared/ui/form-label';
import { CheckboxCard } from '@/shared/ui/checkbox-card';
import { Text } from '@/shared/ui/text';

export function CheckboxSection() {
	const [value, setValue] = React.useState(['checkbox-1']);

	return (
		<Flex direction="column" gapY="5" align="center">
			<CheckboxGroup.Root
				allValues={['checkbox-1', 'checkbox-2', 'checkbox-3']}
				value={value}
				onValueChange={setValue}
				gapY="2"
			>
				<FormControlLabel>
					<Checkbox parent />
					<CheckboxGroup.Label render={<FormLabel />}>
						Parent checkbox
					</CheckboxGroup.Label>
				</FormControlLabel>
				<FormControlLabel ml="2">
					<Checkbox value="checkbox-1" />
					<FormLabel>Checkbox 1</FormLabel>
				</FormControlLabel>
				<FormControlLabel ml="2">
					<Checkbox value="checkbox-2" />
					<FormLabel>Checkbox 2</FormLabel>
				</FormControlLabel>
				<FormControlLabel ml="2">
					<Checkbox value="checkbox-3" />
					<FormLabel>Checkbox 3</FormLabel>
				</FormControlLabel>
			</CheckboxGroup.Root>
			<CheckboxGroup.Root disabled gapY="1">
				<CheckboxGroup.Label weight="medium">Disabled group</CheckboxGroup.Label>
				<Flex gapX="4">
					<FormControlLabel>
						<Checkbox />
						<FormLabel>Checkbox 1</FormLabel>
					</FormControlLabel>
					<FormControlLabel>
						<Checkbox />
						<FormLabel>Checkbox 2</FormLabel>
					</FormControlLabel>
					<FormControlLabel>
						<Checkbox />
						<FormLabel>Checkbox 3</FormLabel>
					</FormControlLabel>
				</Flex>
			</CheckboxGroup.Root>
			<CheckboxGroup.Root readOnly gapY="1">
				<CheckboxGroup.Label weight="medium">Readonly group</CheckboxGroup.Label>
				<Flex gapX="4">
					<FormControlLabel>
						<Checkbox />
						<FormLabel>Checkbox 1</FormLabel>
					</FormControlLabel>
					<FormControlLabel>
						<Checkbox />
						<FormLabel>Checkbox 2</FormLabel>
					</FormControlLabel>
					<FormControlLabel>
						<Checkbox />
						<FormLabel>Checkbox 3</FormLabel>
					</FormControlLabel>
				</Flex>
			</CheckboxGroup.Root>
			<FormControlLabel required>
				<Checkbox />
				<FormLabel>Required checkbox</FormLabel>
			</FormControlLabel>
			<Flex>
				<CheckboxGroup.Root gapY="2">
					<CheckboxGroup.Label weight="medium">Checkbox cards</CheckboxGroup.Label>
					<CheckboxCard>
						<Flex direction="column">
							<Text color="hard" weight="medium">
								Checkbox card 1
							</Text>
							<Text tag="p" size="2">
								Сообщение, написанное, напечатанное или высказанное устно.
							</Text>
						</Flex>
					</CheckboxCard>
					<CheckboxCard>
						<Flex direction="column">
							<Text color="hard" weight="medium">
								Checkbox card 2
							</Text>
							<Text tag="p" size="2">
								Сообщение, написанное, напечатанное или высказанное устно.
							</Text>
						</Flex>
					</CheckboxCard>
					<CheckboxCard disabled>
						<Flex direction="column">
							<Text color="hard" weight="medium">
								Disabled checkbox card 3
							</Text>
							<Text tag="p" size="2">
								Сообщение, написанное, напечатанное или высказанное устно.
							</Text>
						</Flex>
					</CheckboxCard>
				</CheckboxGroup.Root>
			</Flex>
		</Flex>
	);
}
