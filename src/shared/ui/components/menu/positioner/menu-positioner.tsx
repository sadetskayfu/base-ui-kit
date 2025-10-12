import {
	POPUP_ARROW_PADDING,
	POPUP_COLLISION_PADDING_BLOCK,
	POPUP_COLLISION_PADDING_INLINE,
	POPUP_SIDE_OFFSET,
	POPUP_SIDE_OFFSET_WITH_ARROW,
} from '@/shared/constants';
import { BaseMenu } from '../base';
import { useMenuSubmenuRootContext } from '../submenu-root/menu-submenu-root-context';

export function MenuPositioner(props: MenuPositioner.Props) {
	const {
		arrowPadding = POPUP_ARROW_PADDING,
		collisionPadding = {
			left: POPUP_COLLISION_PADDING_INLINE,
			right: POPUP_COLLISION_PADDING_INLINE,
			top: POPUP_COLLISION_PADDING_BLOCK,
			bottom: POPUP_COLLISION_PADDING_BLOCK,
		},
		arrow,
		...otherProps
	} = props;

	const isNested = Boolean(useMenuSubmenuRootContext());

	return (
		<BaseMenu.Positioner
			sideOffset={isNested ? 0 : arrow ? POPUP_SIDE_OFFSET_WITH_ARROW : POPUP_SIDE_OFFSET}
			alignOffset={isNested ? -4 : 0}
			arrowPadding={arrowPadding}
			collisionPadding={collisionPadding}
			{...otherProps}
		/>
	);
}

export namespace MenuPositioner {
	export interface Props extends BaseMenu.Positioner.Props {
		/**
		 * @default false
		 */
		arrow?: boolean;
	}
}
