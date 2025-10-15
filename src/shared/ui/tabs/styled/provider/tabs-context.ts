import * as React from 'react';
import type { TabsTab } from '../tab/tabs-tab';

export interface TabsContext {
	radius?: TabsTab.Props['radius'];
	size?: TabsTab.Props['size'];
    disabled?: boolean
	fullWidth?: boolean
}

export const TabsContext = React.createContext<TabsContext | undefined>(undefined);

export function useTabsContext() {
	return React.useContext(TabsContext);
}
