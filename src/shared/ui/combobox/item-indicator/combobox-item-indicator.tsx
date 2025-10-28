import classNames from 'classnames';
import { BaseCombobox } from '../../base/combobox';

export function ComboboxItemIndicator(props: BaseCombobox.ItemIndicator.Props) {
	const { className, ...otherProps } = props;

	return (
		<BaseCombobox.ItemIndicator
			className={classNames('yar-display-flex ml-auto', className)}
			{...otherProps}
		/>
	);
}
