import * as React from 'react';
import { ChipContext } from './chip-context';

export function ChipProvider(props: ChipProvider.Props) {
	const {
		children,
		color,
		radius,
		size,
		variant,
	} = props;

	const contextValue: ChipContext = React.useMemo(
		() => ({
			color,
			radius,
			size,
			variant,
		}),
		[color, radius, size, variant]
	);

	return <ChipContext.Provider value={contextValue}>{children}</ChipContext.Provider>;
}

export namespace ChipProvider {
	export interface Props extends ChipContext {
		children?: React.ReactNode;
	}
}
