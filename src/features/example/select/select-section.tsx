import { Grid } from '@/shared/ui/grid';
import { ExampleSingleSelect } from './ui/example-single-select';
import { ExampleMultiSelect } from './ui/example-multi-select';
import { ExampleFieldGroupSelect } from './ui/example-field-group-select';
import { useBreakpoints } from '@/shared/lib/breakpoints';

export function SelectSection() {
	const {md, xs} = useBreakpoints()

	return (
		<Grid gap="3" columns={md ? '3' : xs ? '2' : '1'}>
			<ExampleSingleSelect />
            <ExampleMultiSelect />
            <ExampleFieldGroupSelect />
		</Grid>
	);
}
