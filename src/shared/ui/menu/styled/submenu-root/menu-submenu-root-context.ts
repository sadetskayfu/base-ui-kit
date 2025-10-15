import * as React from 'react';

export interface MenuSubmenuRootContext {}

export const MenuSubmenuRootContext = React.createContext<MenuSubmenuRootContext | undefined>(
	undefined
);

export function useMenuSubmenuRootContext() {
	return React.useContext(MenuSubmenuRootContext);
}
