import * as React from 'react';
import { useId, useModernLayoutEffect } from '@/shared/hooks';
import { useRenderElement } from '@/shared/hooks/use-render-element';
import { useFieldRootContext } from '../root/field-root-context';

/**
 * Renders a `<p>` element.
 */
export const FieldHelperText = React.forwardRef(function FieldHelperText(
	props: FieldHelperText.Props,
	forwardedRef: React.ForwardedRef<HTMLParagraphElement>
) {
	const { render, id: idProp, ...otherProps } = props;

	const id = useId(idProp);

	const { setHelperTextIds } = useFieldRootContext();

	useModernLayoutEffect(() => {
		setHelperTextIds(prev => [...prev, id]);

		return () => {
			setHelperTextIds(prev => {
				return prev.filter(v => v !== id);
			});
		};
	}, [id, setHelperTextIds]);

	const element = useRenderElement('p', {
		render,
		ref: forwardedRef,
		props: [{ id }, otherProps],
	});

	return element;
});

export namespace FieldHelperText {
	export interface State {}
	export interface Props extends useRenderElement.ModernComponentProps<'p', State> {}
}
