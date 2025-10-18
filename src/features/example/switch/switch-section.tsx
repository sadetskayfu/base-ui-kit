import { Flex } from '@/shared/ui/flex';
import { FormControlLabel } from '@/shared/ui/form-control-label';
import { FormGroup } from '@/shared/ui/form-group';
import { FormLabel } from '@/shared/ui/form-label';
import { Switch } from '@/shared/ui/switch';

export function SwitchSection() {
	return (
		<Flex gapX="5" justify="center">
				<FormGroup.Root gapY="1">
					<FormGroup.Label weight="medium">Group</FormGroup.Label>
					<Flex gap="2" direction="column">
						<FormControlLabel>
							<Switch />
							<FormLabel>Switch 1</FormLabel>
						</FormControlLabel>
						<FormControlLabel>
							<Switch />
							<FormLabel>Switch 2</FormLabel>
						</FormControlLabel>
						<FormControlLabel disabled>
							<Switch />
							<FormLabel>Switch 3</FormLabel>
						</FormControlLabel>
					</Flex>
				</FormGroup.Root>
				<FormGroup.Root gapY="1" disabled>
					<FormGroup.Label weight="medium">Disabled group</FormGroup.Label>
					<Flex gap="2" direction="column">
						<FormControlLabel>
							<Switch value="Switch-1" />
							<FormLabel>Switch 1</FormLabel>
						</FormControlLabel>
						<FormControlLabel>
							<Switch value="Switch-2" />
							<FormLabel>Switch 2</FormLabel>
						</FormControlLabel>
						<FormControlLabel>
							<Switch value="Switch-3" />
							<FormLabel>Switch 3</FormLabel>
						</FormControlLabel>
					</Flex>
				</FormGroup.Root>
				<FormGroup.Root gapY="1" readOnly>
					<FormGroup.Label weight="medium">Readonly group</FormGroup.Label>
					<Flex gap="2" direction="column">
						<FormControlLabel>
							<Switch value="Switch-1" />
							<FormLabel>Switch 1</FormLabel>
						</FormControlLabel>
						<FormControlLabel>
							<Switch value="Switch-2" />
							<FormLabel>Switch 2</FormLabel>
						</FormControlLabel>
						<FormControlLabel>
							<Switch value="Switch-3" />
							<FormLabel>Switch 3</FormLabel>
						</FormControlLabel>
					</Flex>
				</FormGroup.Root>
			</Flex>
	);
}
