import classNames from 'classnames';
import { ScrollArea as BaseScrollArea } from '@base-ui-components/react';
import styles from './scroll-area-scrollbar.module.scss';

export function ScrollAreaScrollbar(props: ScrollAreaScrollbar.Props) {
	const { className, alwaysVisible, orientation, margin = true } = props;

	return (
		<BaseScrollArea.Scrollbar
			className={state =>
				classNames(
					styles['scrollbar'],
					styles[`orientation-${state.orientation}`],
					{
						[styles['always-visible']]: alwaysVisible,
						[styles['margin']]: margin,
					},
					className
				)
			}
			orientation={orientation}
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
