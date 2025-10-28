import * as React from 'react';
import { BaseMenu } from '../../base/menu';
import { List } from '../../list';

export const MenuGroupLabel = React.forwardRef(function MenuGroupLabel(
	props: MenuGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<BaseMenu.GroupLabel render={<List.GroupLabel />} ref={forwardedRef} {...props} />
	);
});

export namespace MenuGroupLabel {
	export interface Props extends BaseMenu.GroupLabel.Props, List.GroupLabel.OwnProps {}
}
