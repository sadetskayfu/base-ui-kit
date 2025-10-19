import * as React from 'react';
import { BaseCombobox } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const ComboboxRadioItem = React.forwardRef(function ComboboxRadioItem(
	props: ComboboxRadioItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseCombobox.Item
			render={<MenuComponents.RadioItem disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace ComboboxRadioItem {
	export interface Props extends BaseCombobox.Item.Props, MenuComponents.RadioItem.OwnProps {}
}
