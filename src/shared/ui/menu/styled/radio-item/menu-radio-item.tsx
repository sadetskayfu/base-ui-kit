import * as React from 'react';
import { BaseMenu } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const MenuRadioItem = React.forwardRef(function MenuRadioItem(
	props: MenuRadioItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseMenu.RadioItem
			render={<MenuComponents.RadioItem disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace MenuRadioItem {
	export interface Props extends BaseMenu.RadioItem.Props, MenuComponents.RadioItem.OwnProps {}
}
