import * as React from 'react';
import { Text } from '@/shared/ui/components/text';
import { STooltip } from '../styled/index';

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
		<STooltip.Root delay={delay} open={open} onOpenChange={setOpen} {...otherProps}>
			<STooltip.Trigger
				aria-describedby={describeChild && open ? labelId : undefined}
				render={children}
			/>
			<STooltip.Portal>
				<STooltip.Positioner side={side}>
					<STooltip.Popup width={width}>
						<STooltip.Arrow />
						{typeof content === 'string' ? (
							<Text id={describeChild ? labelId : undefined} color="hard" size="2" align='center'>
								{content}
							</Text>
						) : typeof content === 'function' ? (
							content(labelId)
						) : (
							content
						)}
					</STooltip.Popup>
				</STooltip.Positioner>
			</STooltip.Portal>
		</STooltip.Root>
	);
}

export namespace Tooltip {
	export interface Props extends STooltip.Root.Props, Pick<STooltip.Popup.Props, 'width'> {
		children: React.ReactElement<Record<string, unknown>>;
		content: string | ((id: string) => React.ReactNode) | React.ReactNode;
		describeChild?: boolean;
		side?: STooltip.Positioner.Props['side'];
	}
}
