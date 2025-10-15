import { PopupArrow } from '@/shared/ui/popup-arrow';
import { BasePopover } from '../../base';

export function PopoverArrow(props: PopoverArrow.Props) {
	return <BasePopover.Arrow render={<PopupArrow />} {...props} />;
}

export namespace PopoverArrow {
	export interface Props extends BasePopover.Arrow.Props {}
}
