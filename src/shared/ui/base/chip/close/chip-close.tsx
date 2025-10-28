import * as React from 'react';
import { useChipRootContext } from '../root/chip-root-context';
import { useRenderElement } from '@/shared/hooks/use-render-element';

/**
 * Renders a `<button>` element.
 */
export const ChipClose = React.forwardRef(function ChipClose
	(props: ChipClose.Props, forwardedRef: React.ForwardedRef<HTMLButtonElement>) {
		const { render, disabled: disabledProp, ...otherProps } = props;

		const { disabled, onClose } = useChipRootContext();

		const element = useRenderElement('button', {
			render,
			ref: forwardedRef,
			props: [
				{
					'aria-label': 'Удалить',
                    tabIndex: -1,
					disabled: disabledProp || disabled,
					onClick: event => onClose?.(event.nativeEvent),
				},
				otherProps,
			],
		});

		return element;
	}
);

export namespace ChipClose {
	export interface State {}
	export interface Props extends useRenderElement.ModernComponentProps<'button', State> {}
}
