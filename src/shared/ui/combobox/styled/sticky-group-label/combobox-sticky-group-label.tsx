import * as React from 'react';
import { BaseCombobox } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const ComboboxStickyGroupLabel = React.forwardRef(function ComboboxStickyGroupLabel(
	props: ComboboxStickyGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, ...otherProps } = props;

	return (
		<BaseCombobox.GroupLabel
			render={<MenuComponents.StickyGroupLabel render={render} />}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace ComboboxStickyGroupLabel {
	export interface Props
		extends Omit<BaseCombobox.GroupLabel.Props, 'className' | 'render'>,
			MenuComponents.StickyGroupLabel.Props {}
}
