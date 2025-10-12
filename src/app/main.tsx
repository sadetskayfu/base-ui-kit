import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { BreakpointsProvider } from '@/shared/lib/breakpoints';


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BreakpointsProvider>
			<App />
		</BreakpointsProvider>
	</StrictMode>
);
