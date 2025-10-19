import * as React from 'react';
import { BaseMenu } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const MenuGroupLabel = React.forwardRef(function MenuGroupLabel(
	props: MenuGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<BaseMenu.GroupLabel render={<MenuComponents.GroupLabel />} ref={forwardedRef} {...props} />
	);
});

export namespace MenuGroupLabel {
	export interface Props extends BaseMenu.GroupLabel.Props, MenuComponents.GroupLabel.OwnProps {}
}
