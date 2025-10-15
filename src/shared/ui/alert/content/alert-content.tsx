import classNames from 'classnames';
import { Box } from '@/shared/ui/box';
import styles from './alert-content.module.scss';
/**
 * Renders a `<Box>` component. Using with `<Alert.Icon>` in `<Alert.Header>`
 */
export function AlertContent(props: Box.Props) {
	const { className, ...otherProps } = props;

	return <Box className={classNames(styles['content'], className)} {...otherProps} />;
}
