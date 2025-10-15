import * as React from 'react';
import { BaseSelect } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const SelectRadioItem = React.forwardRef(function SelectRadioItem(
	props: SelectRadioItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, disabled, ...otherProps } = props;

	return (
		<BaseSelect.Item
			render={<MenuComponents.RadioItem render={render} disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace SelectRadioItem {
	export interface Props
		extends Omit<BaseSelect.Item.Props, 'className' | 'render'>,
			MenuComponents.RadioItem.Props {}
}
