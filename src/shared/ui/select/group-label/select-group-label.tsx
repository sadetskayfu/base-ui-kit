import * as React from 'react';
import { BaseSelect } from '../../base/select';
import { List } from '../../list';

export const SelectGroupLabel = React.forwardRef(function SelectGroupLabel(
	props: SelectGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<BaseSelect.GroupLabel
			render={<List.GroupLabel />}
			ref={forwardedRef}
			{...props}
		/>
	);
});

export namespace SelectGroupLabel {
	export interface Props
		extends BaseSelect.GroupLabel.Props,
			List.GroupLabel.OwnProps {}
}
