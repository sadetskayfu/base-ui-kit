import * as React from 'react';
import { BaseCombobox } from '../../base';
import { MenuComponents } from '@/shared/ui/components/menu-components';

export const ComboboxRadioItem = React.forwardRef(function ComboboxRadioItem(
	props: ComboboxRadioItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, disabled, ...otherProps } = props;

	return (
		<BaseCombobox.Item
			render={<MenuComponents.RadioItem render={render} disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace ComboboxRadioItem {
	export interface Props
		extends Omit<BaseCombobox.Item.Props, 'className' | 'render'>,
			MenuComponents.RadioItem.Props {}
}
