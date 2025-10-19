import * as React from 'react';
import { Flex } from '@/shared/ui/flex';

export const MenuGroupLabel = React.forwardRef(function MenuGroupLabel(
	props: MenuGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { px = '3', py = '2', ...otherProps } = props;

	return <Flex ref={forwardedRef} px={px} py={py} {...otherProps} />;
});

export namespace MenuGroupLabel {
	export interface State {}
	export interface OwnProps extends Flex.OwnProps {}
	export interface Props extends Flex.Props {}
}
