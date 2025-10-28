import classNames from 'classnames';
import { BaseScrollArea } from '../../base/scroll-area';
import styles from './scroll-area-scrollbar.module.scss';

export function ScrollAreaScrollbar(props: ScrollAreaScrollbar.Props) {
	const { className, alwaysVisible, orientation, margin, ...otherProps } = props;

	return (
		<BaseScrollArea.Scrollbar
			className={classNames(
				styles['scrollbar'],
				{
					[styles['always-visible']]: alwaysVisible,
					[styles['margin']]: margin,
				},
				className
			)}
			orientation={orientation}
			{...otherProps}
		>
			<BaseScrollArea.Thumb className={styles['thumb']} />
		</BaseScrollArea.Scrollbar>
	);
}

export namespace ScrollAreaScrollbar {
	export interface Props extends Omit<BaseScrollArea.Scrollbar.Props, 'className'> {
		className?: string;
		/**
		 * @default false
		 */
		alwaysVisible?: boolean;
		/**
		 * @default true
		 */
		margin?: boolean;
		orientation: BaseScrollArea.Scrollbar.Props['orientation'];
	}
}
