import * as React from 'react';
import { BaseAutocomplete } from '../../base';
import { MenuComponents } from '@/shared/ui/components/menu-components';

export const AutocompleteGroupLabel = React.forwardRef(function AutocompleteGroupLabel(
	props: AutocompleteGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, ...otherProps } = props;

	return (
		<BaseAutocomplete.GroupLabel
			render={<MenuComponents.GroupLabel render={render} />}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace AutocompleteGroupLabel {
	export interface Props
		extends Omit<BaseAutocomplete.GroupLabel.Props, 'className' | 'render'>,
			MenuComponents.GroupLabel.Props {}
}
