import * as React from 'react';
import { BaseMenu } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const MenuStickyGroupLabel = React.forwardRef(function MenuStickyGroupLabel(
	props: MenuStickyGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<BaseMenu.GroupLabel
			render={<MenuComponents.StickyGroupLabel />}
			ref={forwardedRef}
			{...props}
		/>
	);
});

export namespace MenuStickyGroupLabel {
	export interface Props
		extends BaseMenu.GroupLabel.Props,
			MenuComponents.StickyGroupLabel.OwnProps {}
}
