import { BaseCombobox } from '../../base';
import { Popup } from '@/shared/ui/components/popup';

export function ComboboxPopup(props: ComboboxPopup.Props) {
	const { bgColor = 'grey-2', p = '1', radius = '3', ...otherProps } = props;

	return (
		<BaseCombobox.Popup
			render={<Popup bgColor={bgColor} p={p} radius={radius} />}
			{...otherProps}
		/>
	);
}

export namespace ComboboxPopup {
	export interface Props extends Omit<BaseCombobox.Popup.Props, 'className'>, Popup.Props {}
}
