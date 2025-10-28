import * as React from 'react';
import { Flex } from '../../flex';

export const ListGroupLabel = React.forwardRef(function ListGroupLabel(
	props: ListGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { px = '3', py = '2', ...otherProps } = props;

	return <Flex ref={forwardedRef} px={px} py={py} {...otherProps} />;
});

export namespace ListGroupLabel {
	export interface OwnProps extends Flex.OwnProps {}
	export interface Props extends Flex.Props {}
}
