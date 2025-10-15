import { Backdrop } from '@/shared/ui/backdrop';
import { BasePopover } from '../../base';

export function PopoverBackdrop(props: PopoverBackdrop.Props) {
	return <BasePopover.Backdrop render={<Backdrop />} {...props} />;
}

export namespace PopoverBackdrop {
	export interface Props extends Omit<BasePopover.Backdrop.Props, 'className'>, Backdrop.Props {}
}
