import * as React from 'react';
import { BaseSelect } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const SelectStickyGroupLabel = React.forwardRef(function SelectStickyGroupLabel(
	props: SelectStickyGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, ...otherProps } = props;

	return (
		<BaseSelect.GroupLabel
			render={<MenuComponents.StickyGroupLabel render={render} />}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace SelectStickyGroupLabel {
	export interface Props
		extends Omit<BaseSelect.GroupLabel.Props, 'className' | 'render'>,
			MenuComponents.StickyGroupLabel.Props {}
}
