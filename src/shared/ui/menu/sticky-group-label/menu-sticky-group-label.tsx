import * as React from 'react';
import { BaseMenu } from '../../base/menu';
import { List } from '../../list';

export const MenuStickyGroupLabel = React.forwardRef(function MenuStickyGroupLabel(
	props: MenuStickyGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<BaseMenu.GroupLabel
			render={<List.StickyGroupLabel />}
			ref={forwardedRef}
			{...props}
		/>
	);
});

export namespace MenuStickyGroupLabel {
	export interface Props
		extends BaseMenu.GroupLabel.Props,
			List.StickyGroupLabel.OwnProps {}
}
