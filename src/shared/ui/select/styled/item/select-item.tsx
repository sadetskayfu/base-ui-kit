import * as React from 'react';
import { BaseSelect } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const SelectItem = React.forwardRef(function SelectItem(
	props: SelectItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseSelect.Item
			render={<MenuComponents.Item disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace SelectItem {
	export interface Props extends BaseSelect.Item.Props, MenuComponents.Item.OwnProps {}
}
