import { BaseSelect } from '../base';
import { Popup } from '@/shared/ui/components/popup';

export function SelectPopup(props: SelectPopup.Props) {
	const { bgColor = 'grey-2', p = '1', radius = '3', ...otherProps } = props;

	return (
		<BaseSelect.Popup
			render={<Popup bgColor={bgColor} p={p} radius={radius} />}
			{...otherProps}
		/>
	);
}

export namespace SelectPopup {
	export interface Props extends Omit<BaseSelect.Popup.Props, 'className'>, Popup.Props {}
}
