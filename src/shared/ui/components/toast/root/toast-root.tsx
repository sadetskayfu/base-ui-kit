import classNames from 'classnames';
import { Toast } from '@base-ui-components/react';
import styles from './toast-root.module.scss';

export function ToastRoot(props: ToastRoot.Props) {
	const { className, ...otherProps } = props;

	return <Toast.Root className={classNames(styles['toast'], className)} {...otherProps} />;
}

export namespace ToastRoot {
	export type ToastObject<Data extends object = any> = Toast.Root.ToastObject<Data>;

	export interface Props extends Omit<Toast.Root.Props, 'className'> {
		className?: string;
	}
}
