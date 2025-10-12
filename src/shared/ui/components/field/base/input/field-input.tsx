import * as React from 'react';
import { useRenderElement } from '@/shared/hooks/use-render-element';
import { useFieldRootContext } from '../root/field-root-context';
import { useId, useModernLayoutEffect } from '@/shared/hooks';

export const FieldInput = React.forwardRef(function FieldInput(
	props: FieldInput.Props,
	forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
	const { render, id: idProp, ...otherProps } = props;

	const {
		disabled,
		readOnly,
		errored,
		required,
		inputRef,
		setFocused,
		setInputId,
		helperTextIds,
	} = useFieldRootContext();

	const id = useId(idProp);

	useModernLayoutEffect(() => {
		setInputId(id);

		return () => {
			setInputId(undefined);
		};
	}, [id, setInputId]);

	return useRenderElement('input', {
		render,
		ref: [forwardedRef, inputRef],
		props: [
			{
				id,
				disabled,
				readOnly,
				required,
				onFocus: () => setFocused(true),
				onBlur: () => setFocused(false),
				'aria-invalid': errored ? 'true' : undefined,
				'aria-describedby': helperTextIds.length > 0 ? helperTextIds.join(' ') : undefined,
			},
			otherProps,
		],
	});
});

export namespace FieldInput {
	export interface State {}
	export interface Props extends useRenderElement.ModernComponentProps<'input', State> {}
}
