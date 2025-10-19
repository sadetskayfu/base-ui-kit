import * as React from 'react';
import { Text } from '@/shared/ui/text';
import { BaseTooltip } from '../base';
import { PopupArrow } from '../../popup-arrow';
import {
	EMPTY_OBJECT,
	POPUP_ARROW_PADDING,
	POPUP_COLLISION_PADDING_BLOCK,
	POPUP_COLLISION_PADDING_INLINE,
	POPUP_SIDE_OFFSET,
	POPUP_SIDE_OFFSET_WITH_ARROW,
} from '@/shared/constants';
import { TooltipPopup } from '../styled/popup/tooltip-popup';

export function Tooltip(props: Tooltip.Props) {
	const {
		children,
		content,
		delay = 250,
		describeChild,
		portalTarget,
		arrow = true,
		defaultOpen = false,
		open: externalOpen,
		onOpenChange: externalSetOpen,
		width,
		minAnchorWidth,
		side,
		align,
		popupProps = EMPTY_OBJECT as TooltipPopup.Props,
		positionerProps = EMPTY_OBJECT as BaseTooltip.Positioner.Props,
		...otherProps
	} = props;

	const { bgColor = 'grey-2', px = '2', py = '1', radius = '2', ...otherPopupProps } = popupProps;
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

	const [internalOpen, internalSetOpen] = React.useState<boolean>(defaultOpen);

	const open = externalOpen ?? internalOpen;
	const setOpen = externalSetOpen ?? internalSetOpen;

	const labelId = React.useId();

	return (
		<BaseTooltip.Root delay={delay} open={open} onOpenChange={setOpen} {...otherProps}>
			<BaseTooltip.Trigger
				aria-describedby={describeChild && open ? labelId : undefined}
				render={children}
			/>
			<BaseTooltip.Portal container={portalTarget}>
				<BaseTooltip.Positioner
					sideOffset={arrow ? POPUP_SIDE_OFFSET_WITH_ARROW : POPUP_SIDE_OFFSET}
					arrowPadding={arrowPadding}
					collisionPadding={collisionPadding}
					side={side}
					align={align}
					{...otherPositionerProps}
				>
					<BaseTooltip.Popup
						render={
							<TooltipPopup
								bgColor={bgColor}
								px={px}
								py={py}
								radius={radius}
								width={width}
								minAnchorWidth={minAnchorWidth}
								{...otherPopupProps}
							/>
						}
					>
						{arrow && <BaseTooltip.Arrow render={<PopupArrow />} />}
						{typeof content === 'string' ? (
							<Text
								id={describeChild ? labelId : undefined}
								color="hard"
								size="2"
								align="center"
							>
								{content}
							</Text>
						) : typeof content === 'function' ? (
							content(labelId)
						) : (
							content
						)}
					</BaseTooltip.Popup>
				</BaseTooltip.Positioner>
			</BaseTooltip.Portal>
		</BaseTooltip.Root>
	);
}

export namespace Tooltip {
	export interface Props
		extends BaseTooltip.Root.Props,
			Pick<TooltipPopup.Props, 'width' | 'minAnchorWidth'>,
			Pick<BaseTooltip.Positioner.Props, 'side' | 'align'> {
		children: React.ReactElement<Record<string, unknown>>;
		content: string | ((id: string) => React.ReactNode) | React.ReactNode;
		describeChild?: boolean;
		portalTarget?: BaseTooltip.Portal.Props['container'];
		arrow?: boolean;
		popupProps?: TooltipPopup.Props;
		positionerProps?: BaseTooltip.Positioner.Props;
	}
}
