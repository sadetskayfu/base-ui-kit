import { PopupArrow } from '@/shared/ui/components/popup-arrow';
import { BaseSelect } from '../base';

export function SelectArrow(props: SelectArrow.Props) {
	return <BaseSelect.Arrow render={<PopupArrow />} {...props} />;
}

export namespace SelectArrow {
	export interface Props extends BaseSelect.Arrow.Props {}
}
