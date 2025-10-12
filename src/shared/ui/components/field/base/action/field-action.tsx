import * as React from 'react';
import { useRenderElement } from '@/shared/hooks/use-render-element';
import { getDocument, getActiveElement } from '@/shared/helpers';
import { useFieldRootContext } from '../root/field-root-context';

/**
 * Renders a `<button>` element.
 */
export const FieldAction = React.forwardRef(function FieldAction(
	props: FieldAction.Props,
	forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
	const {
		render,
		className,
		disabled: disabledProp,
		focusOnInputAfterClick,
		enabledWhenReadOnly,
		setInputSelectionRangeAfterFocus = true,
		control,
		onClick,
		...otherProps
	} = props;

	const { disabled, readOnly, inputRef, inputId } = useFieldRootContext();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (disabled || disabledProp) {
			return;
		}

		const input = inputRef.current;

		if (!input) {
			return
		}

		if (
			focusOnInputAfterClick &&
			getActiveElement(getDocument(inputRef.current)) !== inputRef.current
		) {
			const cursorPosition = input.value.length;

			requestAnimationFrame(() => {
				if (setInputSelectionRangeAfterFocus) {
					try {
						input.setSelectionRange(cursorPosition, cursorPosition);
						// eslint-disable-next-line
					} catch {}
				}

				input.focus();
			});
		}

		if (readOnly && !enabledWhenReadOnly) {
			return;
		}

		onClick?.(event);
	};

	const element = useRenderElement('button', {
		className,
		render,
		ref: forwardedRef,
		props: [
			{
				onClick: handleClick,
				onMouseDown: event => {
					if (focusOnInputAfterClick) {
						event.preventDefault();
					}
				},
				disabled: disabledProp || disabled,
				'aria-controls': control ? inputId : undefined,
				'aria-readonly': readOnly && !enabledWhenReadOnly ? 'true' : undefined,
			},
			otherProps,
		],
	});

	return element;
});

export namespace FieldAction {
	export interface State {}
	export interface Props extends useRenderElement.ModernComponentProps<'button', State> {
		/**
		 * @default false
		 */
		focusOnInputAfterClick?: boolean;
		/**
		 * @default false
		 */
		enabledWhenReadOnly?: boolean;
		/**
		 * @default true
		 */
		setInputSelectionRangeAfterFocus?: boolean;
		/**
		 * Add aria-controls attribute
		 * @default false
		 */
		control?: boolean;
	}
}
