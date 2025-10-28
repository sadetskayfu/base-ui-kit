import classNames from 'classnames';
import { BaseToast } from '../../base/toast';
import styles from './toast-content.module.scss';

export function ToastContent(props: ToastContent.Props) {
	const { className, ...otherProps } = props;

	return (
		<BaseToast.Content className={classNames(styles['content'], className)} {...otherProps} />
	);
}

export namespace ToastContent {
	export interface Props extends Omit<BaseToast.Content.Props, 'className'> {
		className?: string;
	}
}
