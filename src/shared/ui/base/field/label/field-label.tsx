import * as React from 'react';
import { useRenderElement } from '@/shared/hooks/use-render-element';
import { useFieldRootContext } from '../root/field-root-context';

/**
 * Renders a `<label>` element.
 */
export const FieldLabel = React.forwardRef(function FieldLabel(
	props: FieldLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLLabelElement>
) {
	const { render, className, ...otherProps } = props;

	const { inputId, focused, required, errored, disabled } = useFieldRootContext();

	const state: FieldLabel.State = React.useMemo(
		() => ({ focused, required, errored, disabled }),
		[focused, required, errored, disabled]
	);

	const element = useRenderElement('label', {
		render,
		className,
		state,
		ref: forwardedRef,
		props: [{ htmlFor: inputId }, otherProps],
	});

	return element;
});

export namespace FieldLabel {
	export interface State {
		focused: boolean;
		errored: boolean;
		required: boolean;
		disabled: boolean;
	}
	export interface Props extends useRenderElement.ModernComponentPropsWithCl<'label', State> {}
}
