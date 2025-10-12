import * as React from 'react';
import { useRenderElement } from '@/shared/hooks/use-render-element';
import { useFieldRootContext } from '../root/field-root-context';

export const FieldInputContainer = React.forwardRef(function FieldInputContainer(
	props: FieldInputContainer.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, ...otherProps } = props;

	const { disabled, errored, focused, inputRef } = useFieldRootContext();

	return useRenderElement('div', {
		render,
		ref: forwardedRef,
		props: [
			{
				['data-disabled' as string]: disabled ? '' : undefined,
				['data-errored' as string]: errored ? '' : undefined,
				['data-focused' as string]: focused ? '' : undefined,
				onPointerDown: event => {
					if (disabled) {
						return
					}

					const target = event.target as HTMLElement;

					if (target.closest('input, textarea, button, a')) {
						return;
					}

					const input = inputRef.current;

					if (!input) {
						return;
					}

					const isStartSlot = target.closest(`[data-side='left']`);

					const cursorPosition = isStartSlot ? 0 : input.value.length;

					requestAnimationFrame(() => {
						try {
							input.setSelectionRange(cursorPosition, cursorPosition);
							// eslint-disable-next-line
						} catch {}

						input.focus();
					});
				},
			},
			otherProps,
		],
	});
});

export namespace FieldInputContainer {
	export interface State {}
	export interface Props extends useRenderElement.ModernComponentProps<'div', State> {}
}
