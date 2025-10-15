import classNames from 'classnames';
import { BaseSelect } from '../../base';
import styles from './select-item-indicator.module.scss';

export function SelectItemIndicator(props: BaseSelect.ItemIndicator.Props) {
	const { className, ...otherProps } = props;

	return (
		<BaseSelect.ItemIndicator
			className={classNames(styles['item-indicator'], className)}
			{...otherProps}
		/>
	);
}
