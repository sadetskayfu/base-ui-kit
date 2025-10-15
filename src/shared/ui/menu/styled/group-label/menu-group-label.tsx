import * as React from 'react';
import { BaseMenu } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const MenuGroupLabel = React.forwardRef(function MenuGroupLabel(
	props: MenuGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, ...otherProps } = props;

	return (
		<BaseMenu.GroupLabel
			render={<MenuComponents.GroupLabel render={render} />}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace MenuGroupLabel {
	export interface Props
		extends Omit<BaseMenu.GroupLabel.Props, 'className' | 'render'>,
			MenuComponents.GroupLabel.Props {}
}
