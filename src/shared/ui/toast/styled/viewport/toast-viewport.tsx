import classNames from 'classnames';
import { BaseToast } from '../../base';
import styles from './toast-viewport.module.scss';

export function ToastViewport(props: ToastViewport.Props) {
	const { className, ...otherProps } = props;

	return (
		<BaseToast.Viewport className={classNames(styles['viewport'], className)} {...otherProps} />
	);
}

export namespace ToastViewport {
	export interface Props extends Omit<BaseToast.Viewport.Props, 'className'> {
		className?: string;
	}
}
