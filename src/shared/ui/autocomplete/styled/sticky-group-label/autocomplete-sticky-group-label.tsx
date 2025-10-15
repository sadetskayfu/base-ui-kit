import * as React from 'react';
import { BaseAutocomplete } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const AutocompleteStickyGroupLabel = React.forwardRef(function AutocompleteStickyGroupLabel(
	props: AutocompleteStickyGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, ...otherProps } = props;

	return (
		<BaseAutocomplete.GroupLabel
			render={<MenuComponents.StickyGroupLabel render={render} />}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace AutocompleteStickyGroupLabel {
	export interface Props
		extends Omit<BaseAutocomplete.GroupLabel.Props, 'className' | 'render'>,
			MenuComponents.StickyGroupLabel.Props {}
}
