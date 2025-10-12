import * as React from 'react';
import { BreakpointsContext } from './breakpoints-context';
import { useModernLayoutEffect } from '@/shared/hooks';
import { breakpoints as breakpointValues } from './breakpoints'

export function BreakpointsProvider({ children }: { children: React.ReactNode }) {
	const [breakpoints, setBreakpoints] = React.useState<BreakpointsContext>({
        initial: true,
		xs: false,
		sm: false,
		md: false,
		lg: false,
		xl: false,
	});

	const contextValue = React.useMemo(() => breakpoints, [breakpoints]);

	useModernLayoutEffect(() => {
		function handleResize() {
			const width = window.innerWidth;

			setBreakpoints(prev => {
				const newBreakpoints: BreakpointsContext = {
                    initial: true,
                    xs: width >= breakpointValues.xs,
                    sm: width >= breakpointValues.sm,
                    md: width >= breakpointValues.md,
                    lg: width >= breakpointValues.lg,
                    xl: width >= breakpointValues.xl
				};

				if (
                    prev.xs === newBreakpoints.xs &&
                    prev.sm === newBreakpoints.sm &&
                    prev.md === newBreakpoints.md &&
                    prev.lg === newBreakpoints.lg &&
                    prev.xl === newBreakpoints.xl
				) {
					return prev;
				}

				return newBreakpoints;
			});
		}

        handleResize()

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<BreakpointsContext.Provider value={contextValue}>{children}</BreakpointsContext.Provider>
	);
}
