import * as React from 'react';
import { BaseSelect } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const SelectCheckboxItem = React.forwardRef(function SelectCheckboxItem(
	props: SelectCheckboxItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { disabled, ...otherProps } = props;

	return (
		<BaseSelect.Item
			render={<MenuComponents.CheckboxItem disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace SelectCheckboxItem {
	export interface Props extends BaseSelect.Item.Props, MenuComponents.CheckboxItem.OwnProps {}
}
