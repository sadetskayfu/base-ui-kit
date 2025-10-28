import classNames from 'classnames';
import { Flex } from '../../flex';
import { Combobox } from '../../combobox';
import styles from './field-combobox-chips.module.scss';

export function FieldComboboxChips(props: FieldComboboxChips.Props) {
	const { className, ...otherProps } = props;

	return (
		<Combobox.Chips
			render={
				<Flex
					gap="1"
					wrap="wrap"
					className={classNames(styles['chips'], className)}
					{...otherProps}
				/>
			}
		/>
	);
}

export namespace FieldComboboxChips {
	export interface Props extends Flex.Props {}
}
