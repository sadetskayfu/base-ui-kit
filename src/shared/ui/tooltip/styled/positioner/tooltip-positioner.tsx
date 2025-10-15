import {
	POPUP_ARROW_PADDING,
	POPUP_COLLISION_PADDING_BLOCK,
	POPUP_COLLISION_PADDING_INLINE,
	POPUP_SIDE_OFFSET,
	POPUP_SIDE_OFFSET_WITH_ARROW,
} from '@/shared/constants';
import { BaseTooltip } from '../../base';

export function TooltipPositioner(props: TooltipPositioner.Props) {
	const {
		arrowPadding = POPUP_ARROW_PADDING,
		collisionPadding = {
			left: POPUP_COLLISION_PADDING_INLINE,
			right: POPUP_COLLISION_PADDING_INLINE,
			top: POPUP_COLLISION_PADDING_BLOCK,
			bottom: POPUP_COLLISION_PADDING_BLOCK,
		},
		arrow = true,
		...otherProps
	} = props;

	return (
		<BaseTooltip.Positioner
			sideOffset={arrow ? POPUP_SIDE_OFFSET_WITH_ARROW : POPUP_SIDE_OFFSET}
			arrowPadding={arrowPadding}
			collisionPadding={collisionPadding}
			{...otherProps}
		/>
	);
}

export namespace TooltipPositioner {
	export interface Props extends BaseTooltip.Positioner.Props {
		/**
		 * @default true
		 */
		arrow?: boolean;
	}
}
