import * as React from 'react';
import { BaseSelect } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const SelectGroupLabel = React.forwardRef(function SelectGroupLabel(
	props: SelectGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, ...otherProps } = props;

	return (
		<BaseSelect.GroupLabel
			render={<MenuComponents.GroupLabel render={render} />}
			ref={forwardedRef}
			{...otherProps}
		/>
	);
});

export namespace SelectGroupLabel {
	export interface Props
		extends Omit<BaseSelect.GroupLabel.Props, 'className' | 'render'>,
			MenuComponents.GroupLabel.Props {}
}
