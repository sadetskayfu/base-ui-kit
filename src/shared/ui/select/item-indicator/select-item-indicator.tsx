import classNames from 'classnames';
import { BaseSelect } from '../../base/select';

export function SelectItemIndicator(props: BaseSelect.ItemIndicator.Props) {
	const { className, ...otherProps } = props;

	return (
		<BaseSelect.ItemIndicator
			className={classNames('yar-display-flex ml-auto', className)}
			{...otherProps}
		/>
	);
}
