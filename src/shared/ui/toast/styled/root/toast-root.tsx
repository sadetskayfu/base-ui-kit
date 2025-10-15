import classNames from 'classnames';
import { BaseToast } from '../../base';
import styles from './toast-root.module.scss';

export function ToastRoot(props: ToastRoot.Props) {
	const { className, ...otherProps } = props;

	return <BaseToast.Root className={classNames(styles['toast'], className)} {...otherProps} />;
}

export namespace ToastRoot {
	export type ToastObject<Data extends object = any> = BaseToast.Root.ToastObject<Data>;

	export interface Props extends Omit<BaseToast.Root.Props, 'className'> {
		className?: string;
	}
}
