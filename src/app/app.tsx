import * as React from 'react'
import { Example } from '@/features/example';
import { Box } from '@/shared/ui/box';
import './styles/index.scss';

export function App() {
	React.useEffect(() => {
		fetch('https://track-users.onrender.com/track', { method: 'POST' });
	}, []);

	return (
		<div className="container">
			<Box py="4">
				<Example />
			</Box>
		</div>
	);
}
