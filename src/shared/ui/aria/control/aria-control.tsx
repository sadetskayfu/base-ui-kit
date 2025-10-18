import * as React from 'react';
import { useRenderElement } from '@/shared/hooks/use-render-element';
import { useAriaRootContext } from '../root/aria-root-context';

/**
 * Renders a `<div>` element.
 */
export const AriaControl = React.forwardRef(function AriaControl(
	props: AriaControl.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, className, ...otherProps } = props;

	const { labelId, helperTextIds } = useAriaRootContext();

	const element = useRenderElement('div', {
		render,
		className,
		ref: forwardedRef,

		props: [
			otherProps,
			{
				'aria-describedby': helperTextIds.length > 0 ? helperTextIds.join(' ') : undefined,
				'aria-labelledby': labelId,
			},
		],
	});

	return element;
});

export namespace AriaControl {
	export type State = {};
	export type Props = useRenderElement.ModernComponentProps<'div', State>;
}
