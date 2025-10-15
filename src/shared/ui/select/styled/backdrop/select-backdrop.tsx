import { Backdrop } from '@/shared/ui/backdrop';
import { BaseSelect } from '../../base';

export function SelectBackdrop(props: SelectBackdrop.Props) {
	return <BaseSelect.Backdrop render={<Backdrop />} {...props} />;
}

export namespace SelectBackdrop {
	export interface Props extends Omit<BaseSelect.Backdrop.Props, 'className'>, Backdrop.Props {}
}
