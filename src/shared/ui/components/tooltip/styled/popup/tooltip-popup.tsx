import { BaseTooltip } from '../../base';
import { Popup } from '@/shared/ui/components/popup';

export function TooltipPopup(props: TooltipPopup.Props) {
	const { bgColor = 'grey-2', px = '2', py = '1', radius = '2', ...otherProps } = props;

	return (
		<BaseTooltip.Popup
			render={
				<Popup bgColor={bgColor} px={px} py={py} radius={radius} minAnchorWidth={false} />
			}
			{...otherProps}
		/>
	);
}

export namespace TooltipPopup {
	export interface Props extends Omit<BaseTooltip.Popup.Props, 'className'>, Popup.Props {}
}
