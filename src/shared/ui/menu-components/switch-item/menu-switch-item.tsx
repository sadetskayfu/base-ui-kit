import * as React from 'react';
import classNames from 'classnames';
import { MenuItem } from '../item/menu-item';
import styles from './menu-switch-item.module.scss';

/**
 * Renders a `<MenuComponents.Item>` with visually switch.
 */
export const MenuSwitchItem = React.forwardRef(function MenuSwitchItem(
	props: MenuSwitchItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { children, className, ...otherProps } = props;

	return (
		<MenuItem
			className={classNames(styles['switch-item'], className)}
			ref={forwardedRef}
			{...otherProps}
		>
			{children}
			<span className={styles['switch']} />
		</MenuItem>
	);
});

export namespace MenuSwitchItem {
	export interface Props extends MenuItem.Props {}
}
