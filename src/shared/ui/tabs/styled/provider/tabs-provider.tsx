import * as React from 'react';
import { TabsContext } from './tabs-context';

export const TabsProvider = (props: TabsProvider.Props) => {
	const { children, size, radius, disabled, fullWidth} = props;

	const contextValue: TabsContext = React.useMemo(
		() => ({ size, disabled, radius, fullWidth}),
		[size, disabled, radius, fullWidth]
	);

	return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
};

export namespace TabsProvider {
	export interface Props extends TabsContext {
		children?: React.ReactNode;
	}
}
