import { Backdrop } from '@/shared/ui/components/backdrop';
import { BaseCombobox } from '../../base';

export function ComboboxBackdrop(props: ComboboxBackdrop.Props) {
	return <BaseCombobox.Backdrop render={<Backdrop />} {...props} />;
}

export namespace ComboboxBackdrop {
	export interface Props extends Omit<BaseCombobox.Backdrop.Props, 'className'>, Backdrop.Props {}
}
