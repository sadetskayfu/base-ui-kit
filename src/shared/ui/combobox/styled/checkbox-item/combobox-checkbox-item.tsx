import * as React from 'react';
import { BaseCombobox } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const ComboboxCheckboxItem = React.forwardRef(function ComboboxCheckboxItem(
	props: ComboboxCheckboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseCombobox.Item
			render={<MenuComponents.CheckboxItem disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace ComboboxCheckboxItem {
	export interface Props extends BaseCombobox.Item.Props, MenuComponents.CheckboxItem.OwnProps {}
}
