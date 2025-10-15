import classNames from 'classnames';
import { BaseCombobox } from '../../base';
import styles from './combobox-item-indicator.module.scss';

export function ComboboxItemIndicator(props: BaseCombobox.ItemIndicator.Props) {
	const { className, ...otherProps } = props;

	return (
		<BaseCombobox.ItemIndicator
			className={classNames(styles['item-indicator'], className)}
			{...otherProps}
		/>
	);
}
