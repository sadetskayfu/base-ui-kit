
import classNames from 'classnames';
import styles from './alert-header.module.scss';

/**
 * Renders a `<div>` element.
 */
export function AlertHeader(props: React.ComponentProps<'div'>) {
	const { className, ...otherProps } = props;

	return <div className={classNames(styles['header'], className)} {...otherProps} />;
}
