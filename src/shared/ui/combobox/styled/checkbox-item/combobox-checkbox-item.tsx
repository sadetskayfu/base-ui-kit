import * as React from 'react';
import { BaseCombobox } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const ComboboxCheckboxItem = React.forwardRef(function ComboboxCheckboxItem(
	props: ComboboxCheckboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, disabled, ...otherProps } = props;

	return (
		<BaseCombobox.Item
			render={<MenuComponents.CheckboxItem render={render} disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace ComboboxCheckboxItem {
	export interface Props
		extends Omit<BaseCombobox.Item.Props, 'className' | 'render'>,
			MenuComponents.CheckboxItem.Props {}
}
