import * as React from 'react';
import { BaseSelect } from '../../base/select';
import { List } from '../../list';

export const SelectRadioItem = React.forwardRef(function SelectRadioItem(
	props: SelectRadioItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseSelect.Item
			render={<List.RadioItem disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace SelectRadioItem {
	export interface Props extends BaseSelect.Item.Props, List.RadioItem.OwnProps {}
}
