import classNames from 'classnames';
import styles from './chip-label.module.scss';

export function ChipLabel(props: ChipLabel.Props) {
	const { className, ...otherProps } = props;

	return <span className={classNames(styles['label'], className)} {...otherProps} />;
}

export namespace ChipLabel {
	export interface Props extends React.ComponentProps<'span'> {}
}
