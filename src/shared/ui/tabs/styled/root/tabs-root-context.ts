import * as React from 'react';
import type { TabsRoot } from './tabs-root';
import { useContext } from '@/shared/hooks';

export interface TabsRootContext {
	panelPosition: TabsRoot.Props['panelPosition'];
}

export const TabsRootContext = React.createContext<TabsRootContext | undefined>(undefined);

export function useTabsRootContext() {
	return useContext(
		TabsRootContext,
		'TabsRootContext is missing. Tabs parts must be used within <Tabs.Root>'
	);
}
