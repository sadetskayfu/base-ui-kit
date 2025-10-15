import * as React from 'react';
import { BaseMenu } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const MenuStickyGroupLabel = React.forwardRef(function MenuStickyGroupLabel(
	props: MenuStickyGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, ...otherProps } = props;

	return (
		<BaseMenu.GroupLabel
			render={<MenuComponents.StickyGroupLabel render={render} />}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace MenuStickyGroupLabel {
	export interface Props
		extends Omit<BaseMenu.GroupLabel.Props, 'className' | 'render'>,
			MenuComponents.StickyGroupLabel.Props {}
}
