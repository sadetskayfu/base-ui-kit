import classNames from 'classnames';
import { ScrollArea } from '../../scroll-area';
import styles from './list-scroll-area.module.scss';

export function ListScrollArea(props: ListScrollArea.Props) {
	const {
		children,
		className,
		withStickyGroupLabel,
		alwaysVisibleScrollbar = true,
		offset = '1',
		...otherProps
	} = props;

	return (
		<ScrollArea.Root
			className={classNames(
				styles['scroll-area'],
				styles[`offset-${offset}`],
				{ [styles['scroll-padding']]: withStickyGroupLabel },
				className
			)}
			{...otherProps}
		>
			<ScrollArea.Viewport className={styles['viewport']} tabIndex={-1}>
				<ScrollArea.Content variablePadding>{children}</ScrollArea.Content>
				<ScrollArea.Scrollbar orientation="vertical" alwaysVisible={alwaysVisibleScrollbar} margin />
			</ScrollArea.Viewport>
		</ScrollArea.Root>
	);
}

export namespace ListScrollArea {
	export interface Props extends ScrollArea.Root.Props {
		/**
		 * Adds css attribute `scroll-padding-top` equal to css var `--List-item-group-label-height`
		 */
		withStickyGroupLabel?: boolean;
		offset?: '1' | '4';
		alwaysVisibleScrollbar?: boolean;
	}
}
