import {
	POPUP_ARROW_PADDING,
	POPUP_COLLISION_PADDING_BLOCK,
	POPUP_COLLISION_PADDING_INLINE,
	POPUP_SIDE_OFFSET,
	POPUP_SIDE_OFFSET_WITH_ARROW,
} from '@/shared/constants';
import { BaseAutocomplete } from '../../base';

export function AutocompletePositioner(props: AutocompletePositioner.Props) {
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
		<BaseAutocomplete.Positioner
			sideOffset={arrow ? POPUP_SIDE_OFFSET_WITH_ARROW : POPUP_SIDE_OFFSET}
			arrowPadding={arrowPadding}
			collisionPadding={collisionPadding}
			{...otherProps}
		/>
	);
}

export namespace AutocompletePositioner {
	export interface Props extends BaseAutocomplete.Positioner.Props {
		/**
		 * @default false
		 */
		arrow?: boolean;
	}
}
