import classNames from 'classnames';
import { ScrollArea } from '@/shared/ui/components/scroll-area';
import styles from './menu-scroll-area.module.scss';

export function MenuScrollArea(props: MenuScrollArea.Props) {
	const { children, className, viewportClassName, withStickyGroupLabel, ...otherProps } = props;

	return (
		<ScrollArea.Root
			className={classNames(
				styles['scroll-area'],
				{ [styles['scroll-padding']]: withStickyGroupLabel },
				className
			)}
			viewportClassName={classNames(styles['viewport'], viewportClassName)}
			{...otherProps}
		>
			<ScrollArea.Content variablePadding>{children}</ScrollArea.Content>
		</ScrollArea.Root>
	);
}

export namespace MenuScrollArea {
	export interface Props extends ScrollArea.Root.Props {
		/**
		 * Adds css attribute `scroll-padding-top` equal to css var `--menu-item-group-label-height`
		 */
		withStickyGroupLabel?: boolean;
	}
}
