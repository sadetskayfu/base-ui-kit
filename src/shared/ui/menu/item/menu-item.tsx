import * as React from 'react';
import { BaseMenu } from '../../base/menu';
import { List } from '../../list';

export const MenuItem = React.forwardRef(function MenuItem(
	props: MenuItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseMenu.Item
			render={<List.Item disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace MenuItem {
	export interface Props extends BaseMenu.Item.Props, List.Item.OwnProps {}
}
