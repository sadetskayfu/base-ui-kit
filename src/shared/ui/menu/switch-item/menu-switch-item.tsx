import * as React from 'react';
import { BaseMenu } from '../../base/menu';
import { List } from '../../list';

export const MenuSwitchItem = React.forwardRef(function MenuSwitchItem(
	props: MenuSwitchItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseMenu.CheckboxItem
			render={<List.SwitchItem disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace MenuSwitchItem {
	export interface Props extends BaseMenu.CheckboxItem.Props, List.SwitchItem.OwnProps {}
}
