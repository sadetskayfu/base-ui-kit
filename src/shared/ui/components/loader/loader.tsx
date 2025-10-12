import * as React from 'react';
import classNames from 'classnames';
import styles from './loader.module.scss';

export function Loader(props: Loader.Props) {
	const { className, size = '1em', color = 'current-color', absCenter, ...otherProps } = props;

	return (
		<span
			className={classNames(
				styles['loader'],
				styles[`size-${size}`],
				styles[`color-${color}`],
				{
					[styles['abs-center']]: absCenter,
				},
                className,
			)}
			role="progressbar"
			{...otherProps}
		>
			<svg className={styles['svg']}>
				<circle className={styles['circle']} />
			</svg>
		</span>
	);
}

export namespace Loader {
	export type Size = '1em' | 'l';
	export type Color = 'primary' | 'current-color';

	export interface Props extends React.ComponentProps<'span'> {
		absCenter?: boolean;
		/**
		 * @default '1em'
		 */
		size?: Size;
		/**
		 * @default 'current-color'
		 */
		color?: Color;
	}
}
