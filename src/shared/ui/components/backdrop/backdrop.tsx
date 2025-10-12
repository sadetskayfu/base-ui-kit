import classNames from 'classnames';
import styles from './backdrop.module.scss';

export function Backdrop(props: Backdrop.Props) {
	const { className, transitionDuration = 200, ...otherProps } = props;

	return (
		<div
			className={classNames(
				styles['backdrop'],
				styles[`duration-${transitionDuration}`],
				className
			)}
			{...otherProps}
		/>
	);
}

export namespace Backdrop {
	export interface Props {
		/**
		 * @default 200
		 */
		transitionDuration?: 200 | 300;
		className?: string;
	}
}
