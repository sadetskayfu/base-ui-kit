import * as React from 'react';
import classNames from 'classnames';
import { Flex } from '@/shared/ui/flex';
import styles from './menu-sticky-group-label.module.scss';

export const MenuStickyGroupLabel = React.forwardRef(function MenuStickyGroupLabel(
	props: MenuStickyGroupLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		className,
		bgColor = 'grey-2',
		gapX = '3',
		px = '3',
		align = 'center',
		...otherProps
	} = props;

	return (
		<Flex
			ref={forwardedRef}
			className={classNames(styles['group-label'], className)}
			bgColor={bgColor}
			gapX={gapX}
			px={px}
			align={align}
			{...otherProps}
		/>
	);
});

export namespace MenuStickyGroupLabel {
	export interface State {}
	export interface OwnProps extends Flex.OwnProps {}
	export interface Props extends Flex.Props {}
}
