import * as React from 'react';
import { BaseCombobox } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const ComboboxGroupLabel = React.forwardRef(function ComboboxGroupLabel(
	props: ComboboxGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, ...otherProps } = props;

	return (
		<BaseCombobox.GroupLabel
			render={<MenuComponents.GroupLabel render={render} />}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace ComboboxGroupLabel {
	export interface Props
		extends Omit<BaseCombobox.GroupLabel.Props, 'className' | 'render'>,
			MenuComponents.GroupLabel.Props {}
}
