import * as React from 'react';
import { BaseMenu } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const MenuCheckboxItem = React.forwardRef(function MenuCheckboxItem(
	props: MenuCheckboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseMenu.CheckboxItem
			render={<MenuComponents.CheckboxItem disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace MenuCheckboxItem {
	export interface Props extends BaseMenu.CheckboxItem.Props, MenuComponents.CheckboxItem.OwnProps {}
}
