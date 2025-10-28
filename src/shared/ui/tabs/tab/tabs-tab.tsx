import * as React from 'react';
import classNames from 'classnames';
import { BaseTabs } from '../../base/tabs';
import { Flex } from '../../flex';
import styles from './tabs-tab.module.scss';

export const TabsTab = React.forwardRef(function TabsTab(
	props: TabsTab.Props,
	forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
	const {
		className,
		disabled,
		radius = '3',
		px = '4',
		py = '2',
		align = 'center',
		justify = 'center',
		...otherProps
	} = props;

	return (
		<BaseTabs.Tab
			ref={forwardedRef}
			disabled={disabled}
			className={classNames(
				styles['tab'],
				{
					['disabled']: disabled,
				},
				className
			)}
			render={
				<Flex
					px={px}
					py={py}
					align={align}
					justify={justify}
					radius={radius}
					render={<button />}
				/>
			}
			{...otherProps}
		/>
	);
});

export namespace TabsTab {
	export interface Props extends Omit<BaseTabs.Tab.Props, 'className'>, Flex.OwnProps {
		className?: string;
	}
}
