import * as React from 'react';
import classNames from 'classnames';
import { BaseTabs } from '../../base';
import { Flex } from '@/shared/ui/flex';
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

	const flexProps = { py, px, align, justify, radius };

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
			render={<Flex {...flexProps} render={<button />} />}
			{...otherProps}
		/>
	);
});

export namespace TabsTab {
	export interface Props extends Omit<BaseTabs.Tab.Props, 'className'>, Flex.OwnProps {
		className?: string;
	}
}
