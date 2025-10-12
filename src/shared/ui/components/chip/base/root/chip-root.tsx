import * as React from 'react';
import { ChipRootContext } from './chip-root-context';
import { useRenderElement } from '@/shared/hooks/use-render-element';

/**
 * Renders a `<div>` element.
 */
export const ChipRoot = React.forwardRef(function ChipRoot(
	props: ChipRoot.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		render,
		disabled = false,
		nativeButton,
		onClose,
		tabIndex,
		...otherProps
	} = props;

	const contextValue: ChipRootContext = React.useMemo(
		() => ({ disabled, onClose }),
		[disabled, onClose]
	);

	const element = useRenderElement('div', {
		render,
		ref: forwardedRef,
		props: [
			{
				onKeyDown: event => {
					if (onClose && !disabled && (event.key === 'Backspace')) {
						event.preventDefault();
						event.stopPropagation();

						onClose(event.nativeEvent);
					}
				},
				...(nativeButton && { disabled, type: 'button' }),
				...(!nativeButton && { 'aria-disabled': disabled ? 'true' : undefined }),
				tabIndex: nativeButton ? tabIndex : disabled ? -1 : tabIndex,
			},
			otherProps,
		],
	});

	return <ChipRootContext.Provider value={contextValue}>{element}</ChipRootContext.Provider>;
});

export namespace ChipRoot {
	export interface State {}
	export interface Props extends useRenderElement.ModernComponentProps<'div', State> {
		disabled?: boolean;
		/**
		 * @default false
		 */
		nativeButton?: boolean;
		onClose?: (event: Event) => void;
	}
}
