import * as React from 'react';
import { BaseMenu } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const MenuItem = React.forwardRef(function MenuItem(
	props: MenuItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseMenu.Item
			render={<MenuComponents.Item disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace MenuItem {
	export interface Props extends BaseMenu.Item.Props, MenuComponents.Item.OwnProps {}
}
