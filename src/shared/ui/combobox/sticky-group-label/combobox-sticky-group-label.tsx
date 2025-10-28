import * as React from 'react';
import { BaseCombobox } from '../../base/combobox';
import { List } from '../../list';

export const ComboboxStickyGroupLabel = React.forwardRef(function ComboboxStickyGroupLabel(
	props: ComboboxStickyGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<BaseCombobox.GroupLabel
			render={<List.StickyGroupLabel />}
			ref={forwardedRef}
			{...props}
		/>
	);
});

export namespace ComboboxStickyGroupLabel {
	export interface Props
		extends BaseCombobox.GroupLabel.Props,
			List.StickyGroupLabel.OwnProps {}
}
