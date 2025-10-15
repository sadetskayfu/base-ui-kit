import classNames from 'classnames';
import { ScrollArea as BaseScrollArea } from '@base-ui-components/react';
import styles from './scroll-area-viewport.module.scss';

export function ScrollAreaViewport(props: ScrollAreaViewport.Props) {
	const { children, className, border, overflowShadow, orientation, ...otherProps } = props;

	return (
		<BaseScrollArea.Viewport
			className={classNames(
				styles['viewport'],
				styles[`orientation-${orientation}`],
				{
					[styles['border']]: border,
					[styles['overflow-shadow']]: overflowShadow,
				},
				className
			)}
			{...otherProps}
		>
			{overflowShadow && (
				<span className={classNames(styles['shadow'], styles['start-shadow'])} />
			)}
			{children}
			{overflowShadow && (
				<span className={classNames(styles['shadow'], styles['end-shadow'])} />
			)}
		</BaseScrollArea.Viewport>
	);
}

export namespace ScrollAreaViewport {
	export interface Props extends Omit<BaseScrollArea.Viewport.Props, 'className'> {
		className?: string;
		border?: boolean;
		overflowShadow?: boolean;
		orientation: 'horizontal' | 'vertical'
	}
}
