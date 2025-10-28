import * as React from 'react';
import { BaseSelect } from '../../base/select';
import { List } from '../../list';

export const SelectStickyGroupLabel = React.forwardRef(function SelectStickyGroupLabel(
	props: SelectStickyGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<BaseSelect.GroupLabel
			render={<List.StickyGroupLabel />}
			ref={forwardedRef}
			{...props}
		/>
	);
});

export namespace SelectStickyGroupLabel {
	export interface Props
		extends BaseSelect.GroupLabel.Props,
			List.StickyGroupLabel.OwnProps {}
}
