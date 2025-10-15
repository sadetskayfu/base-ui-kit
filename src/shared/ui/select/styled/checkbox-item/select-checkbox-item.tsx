import * as React from 'react';
import { BaseSelect } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const SelectCheckboxItem = React.forwardRef(function SelectCheckboxItem(
	props: SelectCheckboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, disabled, ...otherProps } = props;

	return (
		<BaseSelect.Item
			render={<MenuComponents.CheckboxItem render={render} disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace SelectCheckboxItem {
	export interface Props
		extends Omit<BaseSelect.Item.Props, 'className' | 'render'>,
			MenuComponents.CheckboxItem.Props {}
}
