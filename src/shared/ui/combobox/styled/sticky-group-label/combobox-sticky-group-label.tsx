import * as React from 'react';
import { BaseCombobox } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const ComboboxStickyGroupLabel = React.forwardRef(function ComboboxStickyGroupLabel(
	props: ComboboxStickyGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<BaseCombobox.GroupLabel
			render={<MenuComponents.StickyGroupLabel />}
			ref={forwardedRef}
			{...props}
		/>
	);
});

export namespace ComboboxStickyGroupLabel {
	export interface Props
		extends BaseCombobox.GroupLabel.Props,
			MenuComponents.StickyGroupLabel.OwnProps {}
}
