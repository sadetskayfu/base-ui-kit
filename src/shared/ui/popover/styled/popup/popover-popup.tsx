import { BasePopover } from '../../base';
import { Popup } from '@/shared/ui/popup';

export function PopoverPopup(props: PopoverPopup.Props) {
	const { bgColor = 'grey-2', p = '4', radius = '3', ...otherProps } = props;

	return (
		<BasePopover.Popup
			render={<Popup bgColor={bgColor} p={p} radius={radius} />}
			{...otherProps}
		/>
	);
}

export namespace PopoverPopup {
	export interface Props extends Omit<BasePopover.Popup.Props, 'className'>, Popup.Props {}
}
