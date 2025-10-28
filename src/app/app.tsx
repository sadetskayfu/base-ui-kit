import { Example } from '@/features/example';
import { Box } from '@/shared/ui/box';
import { NumberField } from '@base-ui-components/react'
import './styles/index.scss';

export function App() {
	return (
		<div className="container">
			<Box py="4">
				<Example />
				<NumberField.Root>
					
				</NumberField.Root>
			</Box>
		</div>
	);
}
