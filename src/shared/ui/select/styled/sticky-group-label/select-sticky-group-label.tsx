import * as React from 'react';
import { BaseSelect } from '../../base';
import { MenuComponents } from '@/shared/ui/menu-components';

export const SelectStickyGroupLabel = React.forwardRef(function SelectStickyGroupLabel(
	props: SelectStickyGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<BaseSelect.GroupLabel
			render={<MenuComponents.StickyGroupLabel />}
			ref={forwardedRef}
			{...props}
		/>
	);
});

export namespace SelectStickyGroupLabel {
	export interface Props
		extends BaseSelect.GroupLabel.Props,
			MenuComponents.StickyGroupLabel.OwnProps {}
}
