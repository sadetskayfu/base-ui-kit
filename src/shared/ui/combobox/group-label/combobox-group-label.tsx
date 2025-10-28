import * as React from 'react';
import { BaseCombobox } from '../../base/combobox';
import { List } from '../../list';

export const ComboboxGroupLabel = React.forwardRef(function ComboboxGroupLabel(
	props: ComboboxGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<BaseCombobox.GroupLabel
			render={<List.GroupLabel />}
			ref={forwardedRef}
			{...props}
		/>
	);
});

export namespace ComboboxGroupLabel {
	export interface Props
		extends BaseCombobox.GroupLabel.Props,
			List.GroupLabel.OwnProps {}
}
