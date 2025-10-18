import {
	POPUP_ARROW_PADDING,
	POPUP_COLLISION_PADDING_BLOCK,
	POPUP_COLLISION_PADDING_INLINE,
	POPUP_SIDE_OFFSET,
	POPUP_SIDE_OFFSET_WITH_ARROW,
} from '@/shared/constants';
import { BaseCombobox } from '../../base';

export function ComboboxPositioner(props: ComboboxPositioner.Props) {
	const {
		arrowPadding = POPUP_ARROW_PADDING,
		collisionPadding = {
			left: POPUP_COLLISION_PADDING_INLINE,
			right: POPUP_COLLISION_PADDING_INLINE,
			top: POPUP_COLLISION_PADDING_BLOCK,
			bottom: POPUP_COLLISION_PADDING_BLOCK,
		},
		arrow,
		withFullScreenPopup,
		...otherProps
	} = props;

	return (
		<BaseCombobox.Positioner
			sideOffset={arrow ? POPUP_SIDE_OFFSET_WITH_ARROW : POPUP_SIDE_OFFSET}
			arrowPadding={arrowPadding}
			collisionPadding={collisionPadding}
			render={({ style, ...otherProps }) => (
				<div {...(!withFullScreenPopup && { style })} {...otherProps} />
			)}
			{...otherProps}
		/>
	);
}

export namespace ComboboxPositioner {
	export interface Props extends BaseCombobox.Positioner.Props {
		/**
		 * @default false
		 */
		arrow?: boolean;
		withFullScreenPopup?: boolean;
	}
}
