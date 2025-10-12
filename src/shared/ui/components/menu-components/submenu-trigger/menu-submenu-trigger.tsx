import * as React from 'react';
import { MenuItem } from '../item/menu-item';
import { Icon } from '@/shared/ui/components/icons';
import styles from './menu-submenu-trigger.module.scss';

/**
 * Renders a `<MenuComponents.Item>` with `<Icon.ChevronRight>`.
 */
export const MenuSubmenuTrigger = React.forwardRef(function MenuSubmenuTrigger(
	props: MenuSubmenuTrigger.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { children, ...otherProps } = props;

	return (
		<MenuItem ref={forwardedRef} {...otherProps}>
			{children}
			<Icon.ChevronRight className={styles['chevron-icon']} />
		</MenuItem>
	);
});

export namespace MenuSubmenuTrigger {
	export interface Props extends MenuItem.Props {}
}
