import * as React from 'react';
import { useContext } from '@/shared/hooks';

export interface BreakpointsContext {
    initial: boolean;
	/**
	 * > 520px
	 */
	xs: boolean;
	/**
	 * > 768px
	 */
	sm: boolean;
	/**
	 * > 1024px
	 */
	md: boolean;
	/**
	 * > 1280px
	 */
	lg: boolean;
	/**
	 * > 1640px
	 */
	xl: boolean;
}

export const BreakpointsContext = React.createContext<BreakpointsContext | undefined>(undefined);

export function useBreakpoints() {
	return useContext(
		BreakpointsContext,
		'BreakpointsContext is missing. useBreakpoints must be called inside <BreakpointsProvider>'
	);
}
