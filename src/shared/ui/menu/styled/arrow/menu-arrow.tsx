import { PopupArrow } from '@/shared/ui/popup-arrow';
import { BaseMenu } from '../../base';

export function MenuArrow(props: MenuArrow.Props) {
	return <BaseMenu.Arrow render={<PopupArrow />} {...props} />;
}

export namespace MenuArrow {
	export interface Props extends BaseMenu.Arrow.Props {}
}
