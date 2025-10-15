import * as React from 'react';
import { BaseMenu } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const MenuRadioItem = React.forwardRef(function MenuRadioItem(
	props: MenuRadioItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, disabled, ...otherProps } = props;

	return (
		<BaseMenu.RadioItem
			render={<MenuComponents.RadioItem render={render} disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace MenuRadioItem {
	export interface Props
		extends Omit<BaseMenu.RadioItem.Props, 'className' | 'render'>,
			MenuComponents.RadioItem.Props {}
}
