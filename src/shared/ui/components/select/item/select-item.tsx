import * as React from 'react';
import { BaseSelect } from '../base';
import { MenuComponents } from '@/shared/ui/components/menu-components';

export const SelectItem = React.forwardRef(function SelectItem(
	props: SelectItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, disabled, ...otherProps } = props;

	return (
		<BaseSelect.Item
			render={<MenuComponents.Item render={render} disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace SelectItem {
	export interface Props
		extends Omit<BaseSelect.Item.Props, 'className' | 'render'>,
			MenuComponents.Item.Props {}
}
