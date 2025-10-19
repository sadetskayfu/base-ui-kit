import * as React from 'react';
import { BaseSelect } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const SelectGroupLabel = React.forwardRef(function SelectGroupLabel(
	props: SelectGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<BaseSelect.GroupLabel
			render={<MenuComponents.GroupLabel />}
			ref={forwardedRef}
			{...props}
		/>
	);
});

export namespace SelectGroupLabel {
	export interface Props
		extends BaseSelect.GroupLabel.Props,
			MenuComponents.GroupLabel.OwnProps {}
}
