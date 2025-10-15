import { PopupArrow } from '@/shared/ui/popup-arrow';
import { BaseTooltip } from '../../base';

export function TooltipArrow(props: TooltipArrow.Props) {
	return <BaseTooltip.Arrow render={<PopupArrow />} {...props} />;
}

export namespace TooltipArrow {
	export interface Props extends BaseTooltip.Arrow.Props {}
}
