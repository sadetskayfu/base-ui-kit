import * as React from 'react';
import { useContext } from '@/shared/hooks';

export interface BreakpointsContext {
    initial: boolean;
	xs: boolean;
	sm: boolean;
	md: boolean;
	lg: boolean;
	xl: boolean;
}

export const BreakpointsContext = React.createContext<BreakpointsContext | undefined>(undefined);

export function useBreakpoints() {
	return useContext(
		BreakpointsContext,
		'BreakpointsContext is missing. useBreakpoints must be called inside <BreakpointsProvider>'
	);
}
