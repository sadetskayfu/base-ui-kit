import classNames from 'classnames';
import { BaseSelect } from '../../base/select';
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
import styles from './select-popup.module.scss';

export function SelectPopup(props: SelectPopup.Props) {
	const {
		children,
		className,
		arrow,
		backdrop,
		portalTarget,
		side,
		align,
		alignItemWithTrigger = false,
		bgColor = 'grey-2',
		p = '1',
		radius = '3',
		positionerProps = EMPTY_OBJECT as BaseSelect.Positioner.Props,
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
		<BaseSelect.Portal container={portalTarget}>
			{backdrop && <BaseSelect.Backdrop render={<Backdrop />} />}
			<BaseSelect.Positioner
				sideOffset={arrow ? POPUP_SIDE_OFFSET_WITH_ARROW : POPUP_SIDE_OFFSET}
				arrowPadding={arrowPadding}
				collisionPadding={collisionPadding}
				alignItemWithTrigger={alignItemWithTrigger}
				side={side}
				align={align}
				{...otherPositionerProps}
			>
				<BaseSelect.Popup
					render={
						<Popup
							bgColor={bgColor}
							p={p}
							radius={radius}
							className={classNames(styles['popup'], className)}
						/>
					}
					{...otherProps}
				>
					{arrow && <BaseSelect.Arrow render={<PopupArrow />} />}
					{children}
				</BaseSelect.Popup>
			</BaseSelect.Positioner>
		</BaseSelect.Portal>
	);
}

export namespace SelectPopup {
	export interface Props
		extends Omit<BaseSelect.Popup.Props, 'className' | 'render'>,
			Pick<BaseSelect.Positioner.Props, 'side' | 'align' | 'alignItemWithTrigger'>,
			Popup.Props {
		arrow?: boolean;
		backdrop?: boolean;
		portalTarget?: BaseSelect.Portal.Props['container'];
		positionerProps?: BaseSelect.Positioner.Props;
	}
}

