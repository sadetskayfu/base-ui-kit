import * as React from 'react';
import { BaseSelect } from '../../base/select';
import { List } from '../../list';

export const SelectItem = React.forwardRef(function SelectItem(
	props: SelectItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseSelect.Item
			render={<List.Item disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace SelectItem {
	export interface Props extends BaseSelect.Item.Props, List.Item.OwnProps {}
}
