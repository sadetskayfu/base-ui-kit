import * as React from 'react';
import { BaseMenu } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const MenuSwitchItem = React.forwardRef(function MenuSwitchItem(
	props: MenuSwitchItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, disabled, ...otherProps } = props;

	return (
		<BaseMenu.CheckboxItem
			render={<MenuComponents.SwitchItem render={render} disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace MenuSwitchItem {
	export interface Props
		extends Omit<BaseMenu.CheckboxItem.Props, 'className' | 'render'>,
			MenuComponents.SwitchItem.Props {}
}
