import * as React from 'react';
import { Text } from '@/shared/ui/components/text';
import { StyledTooltip } from '../styled/index';

export function Tooltip(props: Tooltip.Props) {
	const {
		children,
		content,
		delay = 250,
		describeChild,
		side,
		width,
		defaultOpen = false,
		open: externalOpen,
		onOpenChange: externalSetOpen,
		...otherProps
	} = props;

	const [internalOpen, internalSetOpen] = React.useState<boolean>(defaultOpen);

	const open = externalOpen ?? internalOpen;
	const setOpen = externalSetOpen ?? internalSetOpen;

	const labelId = React.useId();

	return (
		<StyledTooltip.Root delay={delay} open={open} onOpenChange={setOpen} {...otherProps}>
			<StyledTooltip.Trigger
				aria-describedby={describeChild && open ? labelId : undefined}
				render={children}
			/>
			<StyledTooltip.Portal>
				<StyledTooltip.Positioner side={side}>
					<StyledTooltip.Popup width={width} bgColor="grey-2" radius="2" px="2" py="1">
						<StyledTooltip.Arrow />
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
					</StyledTooltip.Popup>
				</StyledTooltip.Positioner>
			</StyledTooltip.Portal>
		</StyledTooltip.Root>
	);
}

export namespace Tooltip {
	export interface Props
		extends StyledTooltip.Root.Props,
			Pick<StyledTooltip.Popup.Props, 'width'>,
			Pick<StyledTooltip.Positioner.Props, 'side'> {
		children: React.ReactElement<Record<string, unknown>>;
		content: string | ((id: string) => React.ReactNode) | React.ReactNode;
		describeChild?: boolean;
	}
}
