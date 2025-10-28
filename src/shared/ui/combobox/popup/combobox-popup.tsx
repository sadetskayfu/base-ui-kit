import classNames from 'classnames';
import { BaseCombobox } from '../../base/combobox';
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
import styles from './combobox-popup.module.scss';

export function ComboboxPopup(props: ComboboxPopup.Props) {
	const {
		children,
		className,
		arrow,
		backdrop,
		portalTarget,
		side,
		align,
		bgColor = 'grey-2',
		p = '1',
		radius = '3',
		positionerProps = EMPTY_OBJECT as BaseCombobox.Positioner.Props,
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
		<BaseCombobox.Portal container={portalTarget}>
			{backdrop && <BaseCombobox.Backdrop render={<Backdrop />} />}
			<BaseCombobox.Positioner
				sideOffset={arrow ? POPUP_SIDE_OFFSET_WITH_ARROW : POPUP_SIDE_OFFSET}
				arrowPadding={arrowPadding}
				collisionPadding={collisionPadding}
				side={side}
				align={align}
				{...otherPositionerProps}
			>
				<BaseCombobox.Popup
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
					{arrow && <BaseCombobox.Arrow render={<PopupArrow />} />}
					{children}
				</BaseCombobox.Popup>
			</BaseCombobox.Positioner>
		</BaseCombobox.Portal>
	);
}

export namespace ComboboxPopup {
	export interface Props
		extends Omit<BaseCombobox.Popup.Props, 'className' | 'render'>,
			Pick<BaseCombobox.Positioner.Props, 'side' | 'align'>,
			Popup.Props {
		arrow?: boolean;
		backdrop?: boolean;
		portalTarget?: BaseCombobox.Portal.Props['container'];
		positionerProps?: BaseCombobox.Positioner.Props;
	}
}

