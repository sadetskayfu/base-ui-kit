import * as React from 'react';
import classNames from 'classnames';
import { BaseTabs } from '../../base';
import { useTabsContext } from '../provider/tabs-context';
import { extractProps, radiusPropDef, type RadiusProp } from '@/shared/lib/utilities-props';
import styles from './tabs-tab.module.scss';

export const TabsTab = React.forwardRef(function TabsTab(
	props: TabsTab.Props,
	forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
	const { className, disabled: disabledProp, size, radius: radiusProp, fullWidth: fullWidthProp, ...otherProps } = props;

	const context = useTabsContext();

	const radius = radiusProp || context?.radius;
	const disabled = disabledProp || context?.disabled;

	const { className: radiusClassName } = extractProps({ radius }, radiusPropDef);

	return (
		<BaseTabs.Tab
			ref={forwardedRef}
			disabled={disabled}
			className={classNames(
				styles['tab'],
				styles[`size-${size || context?.size || '3'}`],
				{
					['disabled']: disabled,
                    [styles['full-width']]: fullWidthProp || context?.fullWidth
				},
				radiusClassName,
				className
			)}
			{...otherProps}
		/>
	);
});

export namespace TabsTab {
	export interface Props extends Omit<BaseTabs.Tab.Props, 'className'>, RadiusProp {
		className?: string;
		size?: '2' | '3';
        fullWidth?: boolean
	}
}
