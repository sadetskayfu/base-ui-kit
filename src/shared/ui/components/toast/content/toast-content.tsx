import classNames from 'classnames';
import { Toast } from '@base-ui-components/react/toast';
import styles from './toast-content.module.scss';

export function ToastContent(props: ToastContent.Props) {
	const { className, ...otherProps } = props;

	return <Toast.Content className={classNames(styles['content'], className)} {...otherProps} />;
}

export namespace ToastContent {
	export interface Props extends Omit<Toast.Content.Props, 'className'> {
		className?: string;
	}
}
