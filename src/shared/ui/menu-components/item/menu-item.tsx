import * as React from 'react';
import classNames from 'classnames';
import { Flex } from '@/shared/ui/flex';
import styles from './menu-item.module.scss';

export const MenuItem = React.forwardRef(function MenuItem(
	props: MenuItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		className,
		children,
		disabled,
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
				visualMargin && styles[`visual-margin-${visualMargin}`],
				{
					[styles['disabled']]: disabled,
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

export namespace MenuItem {
	export type VisualMargin = '1' | '2';

	export interface State {}
	export interface OwnProps extends Flex.OwnProps {
		disabled?: boolean;
		visualMargin?: VisualMargin;
	}
	export interface Props extends OwnProps, Flex.Props {}
}
