import { Flex } from '@/shared/ui/flex';
import { FormControlLabel } from '@/shared/ui/form-control-label';
import { FormLabel } from '@/shared/ui/form-label';
import { Radio } from '@/shared/ui/radio';
import { RadioCard } from '@/shared/ui/radio-card';
import { RadioGroup } from '@/shared/ui/radio-group';
import { Text } from '@/shared/ui/text';

export function RadioGroupSection() {
	return (
		<Flex direction="column" gapY="5" align="center">
			<Flex gap="5">
				<RadioGroup.Root defaultValue="radio-1" gapY="1">
					<RadioGroup.Label weight="medium">Radio group</RadioGroup.Label>
					<Flex gap="2" direction="column">
						<FormControlLabel>
							<Radio value="radio-1" />
							<FormLabel>Radio 1</FormLabel>
						</FormControlLabel>
						<FormControlLabel>
							<Radio value="radio-2" />
							<FormLabel>Radio 2</FormLabel>
						</FormControlLabel>
						<FormControlLabel disabled>
							<Radio value="radio-3" />
							<FormLabel>Radio 3</FormLabel>
						</FormControlLabel>
					</Flex>
				</RadioGroup.Root>
				<RadioGroup.Root defaultValue="radio-1" gapY="1" disabled>
					<RadioGroup.Label weight="medium">Disabled group</RadioGroup.Label>
					<Flex gap="2" direction="column">
						<FormControlLabel>
							<Radio value="radio-1" />
							<FormLabel>Radio 1</FormLabel>
						</FormControlLabel>
						<FormControlLabel>
							<Radio value="radio-2" />
							<FormLabel>Radio 2</FormLabel>
						</FormControlLabel>
						<FormControlLabel>
							<Radio value="radio-3" />
							<FormLabel>Radio 3</FormLabel>
						</FormControlLabel>
					</Flex>
				</RadioGroup.Root>
				<RadioGroup.Root defaultValue="radio-1" gapY="1" readOnly>
					<RadioGroup.Label weight="medium">Readonly group</RadioGroup.Label>
					<Flex gap="2" direction="column">
						<FormControlLabel>
							<Radio value="radio-1" />
							<FormLabel>Radio 1</FormLabel>
						</FormControlLabel>
						<FormControlLabel>
							<Radio value="radio-2" />
							<FormLabel>Radio 2</FormLabel>
						</FormControlLabel>
						<FormControlLabel>
							<Radio value="radio-3" />
							<FormLabel>Radio 3</FormLabel>
						</FormControlLabel>
					</Flex>
				</RadioGroup.Root>
			</Flex>
			<RadioGroup.Root defaultValue="radio-1" gapY="3">
				<RadioCard value="radio-1">
					<Flex direction="column">
						<Text color="hard" weight="medium">
							Radio card 1
						</Text>
						<Text tag="p" size="2">
							Сообщение, написанное, напечатанное или высказанное устно.
						</Text>
					</Flex>
				</RadioCard>
				<RadioCard value="radio-2">
					<Flex direction="column">
						<Text color="hard" weight="medium">
							Radio card 2
						</Text>
						<Text tag="p" size="2">
							Сообщение, написанное, напечатанное или высказанное устно.
						</Text>
					</Flex>
				</RadioCard>
				<RadioCard value="radio-3">
					<Flex direction="column">
						<Text color="hard" weight="medium">
							Radio card 3
						</Text>
						<Text tag="p" size="2">
							Сообщение, написанное, напечатанное или высказанное устно.
						</Text>
					</Flex>
				</RadioCard>
			</RadioGroup.Root>
		</Flex>
	);
}
