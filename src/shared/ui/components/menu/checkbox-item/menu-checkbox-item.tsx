import * as React from 'react';
import { BaseMenu } from '../base';
import { MenuComponents } from '@/shared/ui/components/menu-components';

export const MenuCheckboxItem = React.forwardRef(function MenuCheckboxItem(
	props: MenuCheckboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, disabled, ...otherProps } = props;

	return (
		<BaseMenu.CheckboxItem
			render={
				<MenuComponents.CheckboxItem render={render} disabled={disabled} />
			}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace MenuCheckboxItem {
	export interface Props
		extends Omit<BaseMenu.CheckboxItem.Props, 'className' | 'render'>,
			MenuComponents.CheckboxItem.Props {}
}
