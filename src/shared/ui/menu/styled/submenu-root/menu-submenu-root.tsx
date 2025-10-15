import * as React from 'react';
import { MenuSubmenuRootContext } from './menu-submenu-root-context';
import { EMPTY_OBJECT } from '@/shared/constants';
import { BaseMenu } from '../../base';

export function MenuSubmenuRoot(props: MenuSubmenuRoot.Props) {
	const { children, ...otherProps } = props;

	const contextValue: MenuSubmenuRootContext = React.useMemo(() => EMPTY_OBJECT, []);

	return (
		<BaseMenu.SubmenuRoot {...otherProps}>
			<MenuSubmenuRootContext value={contextValue}>{children}</MenuSubmenuRootContext>
		</BaseMenu.SubmenuRoot>
	);
}

export namespace MenuSubmenuRoot {
	export interface Props extends BaseMenu.SubmenuRoot.Props {}
}
