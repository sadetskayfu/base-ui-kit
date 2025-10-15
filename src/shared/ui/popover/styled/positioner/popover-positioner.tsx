import {
	POPUP_ARROW_PADDING,
	POPUP_COLLISION_PADDING_BLOCK,
	POPUP_COLLISION_PADDING_INLINE,
	POPUP_SIDE_OFFSET,
	POPUP_SIDE_OFFSET_WITH_ARROW,
} from '@/shared/constants';
import { BasePopover } from '../../base';

export function PopoverPositioner(props: PopoverPositioner.Props) {
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

	return (
		<BasePopover.Positioner
			sideOffset={arrow ? POPUP_SIDE_OFFSET_WITH_ARROW : POPUP_SIDE_OFFSET}
			arrowPadding={arrowPadding}
			collisionPadding={collisionPadding}
			{...otherProps}
		/>
	);
}

export namespace PopoverPositioner {
	export interface Props extends BasePopover.Positioner.Props {
		/**
		 * @default false
		 */
		arrow?: boolean;
	}
}
