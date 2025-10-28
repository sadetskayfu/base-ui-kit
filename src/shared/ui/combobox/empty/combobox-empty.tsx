import classNames from 'classnames';
import { BaseCombobox } from '../../base/combobox';
import { Text } from '../../text';
import styles from './combobox-empty.module.scss';

export function ComboboxEmpty(props: ComboboxEmpty.Props) {
	const { className, ...otherProps } = props;

	return (
		<BaseCombobox.Empty
			className={classNames(styles['empty'], className)}
			render={<Text tag="div" />}
			{...otherProps}
		/>
	);
}

export namespace ComboboxEmpty {
	export interface Props extends BaseCombobox.Empty.Props, Text.OwnProps {}
}
