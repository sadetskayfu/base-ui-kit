import { Backdrop } from '../../_backdrop';
import { Popup } from '../../_popup';
import { PopupArrow } from '../../_popup-arrow';
import { BasePopover } from '../../base/popover';
import {
	EMPTY_OBJECT,
	POPUP_ARROW_PADDING,
	POPUP_COLLISION_PADDING_BLOCK,
	POPUP_COLLISION_PADDING_INLINE,
	POPUP_SIDE_OFFSET,
	POPUP_SIDE_OFFSET_WITH_ARROW,
} from '@/shared/constants';

export function PopoverPopup(props: PopoverPopup.Props) {
	const {
		children,
		backdrop,
		arrow,
		bgColor = 'grey-2',
		p = '4',
		radius = '3',
		portalTarget,
		side,
		align,
		positionerProps = EMPTY_OBJECT as BasePopover.Positioner.Props,
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

	return (
		<BasePopover.Portal container={portalTarget}>
			{backdrop && <BasePopover.Backdrop render={<Backdrop />} />}
			<BasePopover.Positioner
				sideOffset={arrow ? POPUP_SIDE_OFFSET_WITH_ARROW : POPUP_SIDE_OFFSET}
				arrowPadding={arrowPadding}
				collisionPadding={collisionPadding}
				side={side}
				align={align}
				{...otherPositionerProps}
			>
				<BasePopover.Popup
					render={<Popup bgColor={bgColor} p={p} radius={radius} />}
					{...otherProps}
				>
					{arrow && <BasePopover.Arrow render={<PopupArrow />} />}
					{children}
				</BasePopover.Popup>
			</BasePopover.Positioner>
		</BasePopover.Portal>
	);
}

export namespace PopoverPopup {
	export interface Props
		extends Omit<BasePopover.Popup.Props, 'className' | 'render'>,
			Pick<BasePopover.Positioner.Props, 'side' | 'align'>,
			Popup.Props {
		arrow?: boolean;
		backdrop?: boolean;
		portalTarget?: BasePopover.Portal.Props['container'];
		positionerProps?: BasePopover.Positioner.Props;
	}
}
