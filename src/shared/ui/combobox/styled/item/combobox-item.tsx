import * as React from 'react';
import { BaseCombobox } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const ComboboxItem = React.forwardRef(function ComboboxItem(
	props: ComboboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseCombobox.Item
			render={<MenuComponents.Item disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace ComboboxItem {
	export interface Props extends BaseCombobox.Item.Props, MenuComponents.Item.OwnProps {}
}
