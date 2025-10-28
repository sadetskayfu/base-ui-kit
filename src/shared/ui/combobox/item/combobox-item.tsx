import * as React from 'react';
import { BaseCombobox } from '../../base/combobox';
import { List } from '../../list';

export const ComboboxItem = React.forwardRef(function ComboboxItem(
	props: ComboboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseCombobox.Item
			render={<List.Item disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace ComboboxItem {
	export interface Props extends BaseCombobox.Item.Props, List.Item.OwnProps {}
}
