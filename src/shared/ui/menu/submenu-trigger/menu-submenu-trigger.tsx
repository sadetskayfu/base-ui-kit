import * as React from 'react';
import { BaseMenu } from '../../base/menu';
import { List } from '../../list';
import { Icon } from '../../icons';

export const MenuSubmenuTrigger = React.forwardRef(function MenuSubmenuTrigger(
	props: MenuSubmenuTrigger.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { children, ...otherProps } = props;

	return (
		<BaseMenu.SubmenuTrigger
			render={<List.Item />}
			ref={forwardedRef}
			{...otherProps}
		>
			{children}
			<Icon.ChevronRight className="ml-auto" />
		</BaseMenu.SubmenuTrigger>
	);
});

export namespace MenuSubmenuTrigger {
	export interface Props extends BaseMenu.SubmenuTrigger.Props, List.Item.OwnProps {}
}
