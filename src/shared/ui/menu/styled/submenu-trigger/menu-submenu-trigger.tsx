import * as React from 'react';
import { BaseMenu } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';
import { Icon } from '@/shared/ui/icons';

export const MenuSubmenuTrigger = React.forwardRef(function MenuSubmenuTrigger(
	props: MenuSubmenuTrigger.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { children, ...otherProps } = props;

	return (
		<BaseMenu.SubmenuTrigger
			render={<MenuComponents.Item />}
			ref={forwardedRef}
			{...otherProps}
		>
			{children}
			<Icon.ChevronRight className="ml-auto" />
		</BaseMenu.SubmenuTrigger>
	);
});

export namespace MenuSubmenuTrigger {
	export interface Props extends BaseMenu.SubmenuTrigger.Props, MenuComponents.Item.OwnProps {}
}
