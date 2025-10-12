import { Backdrop } from '@/shared/ui/components/backdrop';
import { BaseMenu } from '../base';

export function MenuBackdrop(props: MenuBackdrop.Props) {
	return <BaseMenu.Backdrop render={<Backdrop />} {...props} />;
}

export namespace MenuBackdrop {
	export interface Props extends Omit<BaseMenu.Backdrop.Props, 'className'>, Backdrop.Props {}
}
