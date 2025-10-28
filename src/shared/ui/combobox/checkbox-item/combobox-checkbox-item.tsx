import * as React from 'react';
import { BaseCombobox } from '../../base/combobox';
import { List } from '../../list';

export const ComboboxCheckboxItem = React.forwardRef(function ComboboxCheckboxItem(
	props: ComboboxCheckboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseCombobox.Item
			render={<List.CheckboxItem disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace ComboboxCheckboxItem {
	export interface Props extends BaseCombobox.Item.Props, List.CheckboxItem.OwnProps {}
}
