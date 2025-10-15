import * as React from 'react';
import classNames from 'classnames';
import { MenuItem } from '../item/menu-item';
import { Icon } from '@/shared/ui/icons';
import styles from './menu-checkbox-item.module.scss';

/**
 * Renders a `<MenuComponents.Item>` with visually checkbox.
 */
export const MenuCheckboxItem = React.forwardRef(function MenuCheckboxItem(
	props: MenuCheckboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { children, className, ...otherProps } = props;

	return (
		<MenuItem
			className={classNames(styles['checkbox-item'], className)}
			ref={forwardedRef}
			{...otherProps}
		>
			{children}
			<span className={styles['checkbox']}>
				<Icon.Check className={styles['check-icon']} />
			</span>
		</MenuItem>
	);
});

export namespace MenuCheckboxItem {
	export interface Props extends MenuItem.Props {}
}
