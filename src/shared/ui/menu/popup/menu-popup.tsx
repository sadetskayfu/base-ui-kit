import { BaseMenu } from '../../base/menu';
import { Popup } from '../../_popup';
import { PopupArrow } from '../../_popup-arrow';
import { Backdrop } from '../../_backdrop';
import {
	EMPTY_OBJECT,
	POPUP_ARROW_PADDING,
	POPUP_COLLISION_PADDING_BLOCK,
	POPUP_COLLISION_PADDING_INLINE,
	POPUP_SIDE_OFFSET,
	POPUP_SIDE_OFFSET_WITH_ARROW,
} from '@/shared/constants';
import { useMenuSubmenuRootContext } from '../submenu-root/menu-submenu-root-context';

export function MenuPopup(props: MenuPopup.Props) {
	const {
		children,
		arrow,
		backdrop,
		portalTarget,
		side,
		align,
		bgColor = 'grey-2',
		p = '1',
		radius = '3',
		positionerProps = EMPTY_OBJECT as BaseMenu.Positioner.Props,
		...otherProps
	} = props;

	const {
		arrowPadding = POPUP_ARROW_PADDING,
		collisionPadding = {
			left: POPUP_COLLISION_PADDING_INLINE,
			right: POPUP_COLLISION_PADDING_INLINE,
			top: POPUP_COLLISION_PADDING_BLOCK,
			bottom: POPUP_COLLISION_PADDING_BLOCK,
		},
		...otherPositionerProps
	} = positionerProps;

	const isNested = Boolean(useMenuSubmenuRootContext());

	return (
		<BaseMenu.Portal container={portalTarget}>
			{backdrop && <BaseMenu.Backdrop render={<Backdrop />} />}
			<BaseMenu.Positioner
				sideOffset={isNested ? 0 : arrow ? POPUP_SIDE_OFFSET_WITH_ARROW : POPUP_SIDE_OFFSET}
				alignOffset={isNested ? -4 : 0}
				arrowPadding={arrowPadding}
				collisionPadding={collisionPadding}
				side={side}
				align={align}
				{...otherPositionerProps}
			>
				<BaseMenu.Popup
					render={<Popup bgColor={bgColor} p={p} radius={radius} />}
					{...otherProps}
				>
					{arrow && <BaseMenu.Arrow render={<PopupArrow />} />}
					{children}
				</BaseMenu.Popup>
			</BaseMenu.Positioner>
		</BaseMenu.Portal>
	);
}

export namespace MenuPopup {
	export interface Props
		extends Omit<BaseMenu.Popup.Props, 'className' | 'render'>,
			Pick<BaseMenu.Positioner.Props, 'side' | 'align'>,
			Popup.Props {
		arrow?: boolean;
		backdrop?: boolean;
		portalTarget?: BaseMenu.Portal.Props['container'];
		positionerProps?: BaseMenu.Positioner.Props;
	}
}
