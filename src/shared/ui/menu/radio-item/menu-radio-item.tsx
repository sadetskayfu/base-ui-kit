import * as React from 'react';
import { BaseMenu } from '../../base/menu';
import { List } from '../../list';

export const MenuRadioItem = React.forwardRef(function MenuRadioItem(
	props: MenuRadioItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseMenu.RadioItem
			render={<List.RadioItem disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace MenuRadioItem {
	export interface Props extends BaseMenu.RadioItem.Props, List.RadioItem.OwnProps {}
}
