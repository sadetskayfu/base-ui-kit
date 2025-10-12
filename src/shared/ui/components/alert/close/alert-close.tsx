import classNames from 'classnames';
import { Button } from '@/shared/ui/components/button';
import { Icon } from '@/shared/ui/components/icons';
import { useAlertRootContext } from '../root/alert-root-context';
import styles from './alert-close.module.scss';

export function AlertClose(props: Button.Props) {
	const { className, ...otherProps } = props;

	const { severity } = useAlertRootContext();

	return (
		<Button
			className={classNames(styles['close-button'], className)}
			color={severity === 'info' ? 'secondary' : severity}
			radius='circular'
			size="2"
			variant="clear"
			iconButton
			aria-label="Close"
			{...otherProps}
		>
			<Icon.X />
		</Button>
	);
}
