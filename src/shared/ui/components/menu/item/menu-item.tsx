import * as React from 'react';
import { BaseMenu } from '../base';
import { MenuComponents } from '@/shared/ui/components/menu-components';

export const MenuItem = React.forwardRef(function MenuItem(
	props: MenuItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, disabled, ...otherProps } = props;

	return (
		<BaseMenu.Item
			render={<MenuComponents.Item render={render} disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace MenuItem {
	export interface Props
		extends Omit<BaseMenu.Item.Props, 'className' | 'render'>,
			MenuComponents.Item.Props {}
}
