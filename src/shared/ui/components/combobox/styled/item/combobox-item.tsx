import * as React from 'react';
import { BaseCombobox } from '../../base';
import { MenuComponents } from '@/shared/ui/components/menu-components';

export const ComboboxItem = React.forwardRef(function ComboboxItem(
	props: ComboboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, disabled, ...otherProps } = props;

	return (
		<BaseCombobox.Item
			render={<MenuComponents.Item render={render} disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace ComboboxItem {
	export interface Props
		extends Omit<BaseCombobox.Item.Props, 'className' | 'render'>,
			MenuComponents.Item.Props {}
}
