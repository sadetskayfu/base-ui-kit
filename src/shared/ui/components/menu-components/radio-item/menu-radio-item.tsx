import * as React from 'react';
import classNames from 'classnames';
import { MenuItem } from '../item/menu-item';
import styles from './menu-radio-item.module.scss';

/**
 * Renders a `<MenuComponents.Item>` with visually radio.
 */
export const MenuRadioItem = React.forwardRef(function MenuRadioItem(
	props: MenuRadioItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { children, className, ...otherProps } = props;

	return (
		<MenuItem
			className={classNames(styles['radio-item'], className)}
			ref={forwardedRef}
			{...otherProps}
		>
			{children}
			<span className={styles['radio']} />
		</MenuItem>
	);
});

export namespace MenuRadioItem {
	export interface Props extends MenuItem.Props {}
}
