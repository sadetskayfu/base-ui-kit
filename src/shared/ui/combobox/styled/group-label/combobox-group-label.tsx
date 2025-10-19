import * as React from 'react';
import { BaseCombobox } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const ComboboxGroupLabel = React.forwardRef(function ComboboxGroupLabel(
	props: ComboboxGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<BaseCombobox.GroupLabel
			render={<MenuComponents.GroupLabel />}
			ref={forwardedRef}
			{...props}
		/>
	);
});

export namespace ComboboxGroupLabel {
	export interface Props
		extends BaseCombobox.GroupLabel.Props,
			MenuComponents.GroupLabel.OwnProps {}
}
