import { PopupArrow } from '@/shared/ui/components/popup-arrow';
import { BaseCombobox } from '../../base';

export function ComboboxArrow(props: ComboboxArrow.Props) {
	return <BaseCombobox.Arrow render={<PopupArrow />} {...props} />;
}

export namespace ComboboxArrow {
	export interface Props extends BaseCombobox.Arrow.Props {}
}
