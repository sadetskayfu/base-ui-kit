import classNames from 'classnames';
import { Icon } from '../../icons';
import { useAlertRootContext } from '../root/alert-root-context';
import styles from './alert-icon.module.scss';

export function AlertIcon(props: React.ComponentProps<'span'>) {
	const { className, ...otherProps } = props;

	const { severity } = useAlertRootContext();

	return (
		<span className={classNames(styles['icon'], className)} {...otherProps}>
			{severity === 'error' && <Icon.CircleX />}
			{severity === 'info' && <Icon.Info />}
			{severity === 'success' && <Icon.CircleCheckBig />}
			{severity === 'warning' && <Icon.TriangleAlert />}
		</span>
	);
}
