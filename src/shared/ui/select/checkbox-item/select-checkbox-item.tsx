import * as React from 'react';
import { BaseSelect } from '../../base/select';
import { List } from '../../list';

export const SelectCheckboxItem = React.forwardRef(function SelectCheckboxItem(
	props: SelectCheckboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseSelect.Item
			render={<List.CheckboxItem disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace SelectCheckboxItem {
	export interface Props extends BaseSelect.Item.Props, List.CheckboxItem.OwnProps {}
}
