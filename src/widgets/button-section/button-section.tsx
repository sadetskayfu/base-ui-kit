import * as React from 'react';
import { Accordion } from '@/shared/ui/components/accordion';
import { Button, ButtonProvider } from '@/shared/ui/components/button';
import { Checkbox } from '@/shared/ui/components/checkbox';
import { CheckboxGroup } from '@/shared/ui/components/checkbox-group';
import { Flex } from '@/shared/ui/components/flex';
import { FormControlLabel } from '@/shared/ui/components/form-control-label';
import { FormLabel } from '@/shared/ui/components/form-label';
import { Grid } from '@/shared/ui/components/grid';
import { Separator } from '@/shared/ui/components/separator';
import { useBreakpoints } from '@/shared/lib/breakpoints';

export function ButtonSection() {
	const [mods, setMods] = React.useState<string[]>([]);

	const disabled = mods.includes('disabled');
	const loading = mods.includes('loading');

	const { xl, lg, md } = useBreakpoints();

	return (
		<Accordion.Item title="Button">
			<CheckboxGroup.Root value={mods} onValueChange={setMods}>
				<CheckboxGroup.Label>Mods</CheckboxGroup.Label>
				<Flex gap="4" mt="3">
					<FormControlLabel>
						<Checkbox value="disabled" />
						<FormLabel>Disabled</FormLabel>
					</FormControlLabel>
					<FormControlLabel>
						<Checkbox value="loading" />
						<FormLabel>Loading</FormLabel>
					</FormControlLabel>
				</Flex>
			</CheckboxGroup.Root>
			<Separator orientation="horizontal" my="4" />
			<Grid columns={xl ? '6' : lg ? '5' : md ? '4' : '2'} gap="5">
				<Flex direction="column" gap="3">
					<ButtonProvider
						color="accent"
						radius="full"
						disabled={disabled}
						loading={loading}
					>
						<Button variant="filled" disabled={disabled}>
							Accent filled
						</Button>
						<Button variant="ghost">Accent ghost</Button>
						<Button variant="outlined">Accent outlined</Button>
						<Button variant="clear">Accent clear</Button>
					</ButtonProvider>
				</Flex>
				<Flex direction="column" gap="3">
					<ButtonProvider
						color="secondary"
						radius="full"
						disabled={disabled}
						loading={loading}
					>
						<Button variant="ghost">Secondary ghost</Button>
						<Button variant="outlined">Secondary outlined</Button>
						<Button variant="clear">Secondary clear</Button>
					</ButtonProvider>
				</Flex>
				<Flex direction="column" gap="3">
					<ButtonProvider
						color="secondary-soft"
						radius="full"
						disabled={disabled}
						loading={loading}
					>
						<Button variant="outlined">Secondary soft outlined</Button>
						<Button variant="clear">Secondary soft clear</Button>
					</ButtonProvider>
				</Flex>
				<Flex direction="column" gap="3">
					<ButtonProvider
						color="warning"
						radius="full"
						disabled={disabled}
						loading={loading}
					>
						<Button variant="filled">Warning filled</Button>
						<Button variant="ghost">Warning ghost</Button>
						<Button variant="outlined">Warning outlined</Button>
						<Button variant="clear">Warning clear</Button>
					</ButtonProvider>
				</Flex>
				<Flex direction="column" gap="3">
					<ButtonProvider
						color="error"
						radius="full"
						disabled={disabled}
						loading={loading}
					>
						<Button variant="filled">Error filled</Button>
						<Button variant="ghost">Error ghost</Button>
						<Button variant="outlined">Error outlined</Button>
						<Button variant="clear">Error clear</Button>
					</ButtonProvider>
				</Flex>
				<Flex direction="column" gap="3">
					<ButtonProvider
						color="success"
						radius="full"
						disabled={disabled}
						loading={loading}
					>
						<Button variant="filled">Success filled</Button>
						<Button variant="ghost">Success ghost</Button>
						<Button variant="outlined">Success outlined</Button>
						<Button variant="clear">Success clear</Button>
					</ButtonProvider>
				</Flex>
			</Grid>
		</Accordion.Item>
	);
}
