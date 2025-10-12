import classNames from 'classnames';
import { Toast } from '@base-ui-components/react';
import styles from './toast-viewport.module.scss';

export function ToastViewport(props: ToastViewport.Props) {
	const { className, ...otherProps } = props;

	return (
		<Toast.Viewport className={classNames(styles['viewport'], className)} {...otherProps} />
	);
}

export namespace ToastViewport {
	export interface Props extends Omit<Toast.Viewport.Props, 'className'> {
		className?: string;
	}
}
