import * as React from 'react';
import { Flex } from '@/shared/ui/flex';
import { BaseTabs } from '../../base';
import { TabsRootContext } from './tabs-root-context';

export function TabsRoot(props: TabsRoot.Props) {
	const { children, panelPosition = 'bottom', ...otherProps } = props;

	const contextValue: TabsRootContext = React.useMemo(
		() => ({ panelPosition}),
		[panelPosition]
	);

	return (
		<BaseTabs.Root
			render={
				<Flex />
			}
			{...otherProps}
		>
			<TabsRootContext.Provider value={contextValue}>{children}</TabsRootContext.Provider>
		</BaseTabs.Root>
	);
}

export namespace TabsRoot {
	export interface Props extends Omit<BaseTabs.Root.Props, 'className'>, Flex.OwnProps {
		className?: string;
		panelPosition?: 'left' | 'top' | 'right' | 'bottom';
	}
}
