import * as React from 'react';
import { BaseCombobox } from '../../base/combobox';
import { List } from '../../list';

export const ComboboxRadioItem = React.forwardRef(function ComboboxRadioItem(
	props: ComboboxRadioItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseCombobox.Item
			render={<List.RadioItem disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace ComboboxRadioItem {
	export interface Props extends BaseCombobox.Item.Props, List.RadioItem.OwnProps {}
}
