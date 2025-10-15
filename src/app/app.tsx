import { Example } from '@/features/example';
import { Box } from '@/shared/ui/box';
import './styles/index.scss';

export function App() {
	return (
		<div className="container">
			<Box py="4">
				<Example />
			</Box>
		</div>
	);
}
