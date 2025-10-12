import * as React from 'react';
import { BaseMenu } from '../base';
import { MenuComponents } from '@/shared/ui/components/menu-components';
import { Icon } from '@/shared/ui/components/icons';

export const MenuSubmenuTrigger = React.forwardRef(function MenuSubmenuTrigger(
	props: MenuSubmenuTrigger.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { children, render, ...otherProps } = props;

	return (
		<BaseMenu.SubmenuTrigger
			render={<MenuComponents.Item render={render} />}
			ref={forwardedRef}
			{...otherProps}
		>
			{children}
			<Icon.ChevronRight className='ml-auto' />
		</BaseMenu.SubmenuTrigger>
	);
});

export namespace MenuSubmenuTrigger {
	export interface Props
		extends Omit<BaseMenu.SubmenuTrigger.Props, 'className' | 'render'>,
			MenuComponents.Item.Props {}
}
