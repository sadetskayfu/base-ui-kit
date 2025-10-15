import classNames from 'classnames';
import { Aria } from '@/shared/ui/aria';
import styles from './alert-description.module.scss';

/**
 * Renders a `<Text>` component with prop `tag` = `p`.
 */
export function AlertDescription(props: Aria.Description.Props) {
	const { className, ...otherProps } = props;

	return (
		<Aria.Description
			className={classNames(styles['description'], className)}
			{...otherProps}
		/>
	);
}
