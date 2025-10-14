import * as React from 'react';
import { BaseAutocomplete } from '../../base';
import { MenuComponents } from '@/shared/ui/components/menu-components';

export const AutocompleteItem = React.forwardRef(function AutocompleteItem(
	props: AutocompleteItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, disabled, ...otherProps } = props;

	return (
		<BaseAutocomplete.Item
			render={<MenuComponents.Item render={render} disabled={disabled} />}
			disabled={disabled}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace AutocompleteItem {
	export interface Props
		extends Omit<BaseAutocomplete.Item.Props, 'className' | 'render'>,
			MenuComponents.Item.Props {}
}
