import * as React from 'react';
import classNames from 'classnames';
import { Flex } from '../../flex';
import styles from './list-item.module.scss';

export const ListItem = React.forwardRef(function ListItem(
	props: ListItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		className,
		children,
		disabled,
		hovered,
		visualMargin,
		radius = '2',
		px = '3',
		py = '2',
		gapX = '3',
		align = 'center',
		...otherProps
	} = props;

	return (
		<Flex
			ref={forwardedRef}
			className={classNames(
				styles['item'],
				{
					[styles['disabled']]: disabled,
					[styles['hovered']]: hovered,
					[styles[`visual-margin-${visualMargin}`]]: visualMargin,
				},
				className
			)}
			radius={radius}
			px={px}
			py={py}
			gapX={gapX}
			align={align}
			{...otherProps}
		>
			{children}
		</Flex>
	);
});

export namespace ListItem {
	export interface State {}
	export interface OwnProps extends Flex.OwnProps {
		disabled?: boolean;
		hovered?: boolean
		visualMargin?: '1' | '2';
	}
	export interface Props extends OwnProps, Flex.Props {}
}
