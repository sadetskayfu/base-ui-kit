import * as React from 'react';
import classNames from 'classnames';
import { Ripple, useRipple } from '@/shared/lib/ripple';
import { useRenderElement } from '@/shared/hooks';
import {
	extractProps,
	marginPropDefs,
	radiusPropDef,
	type MarginProps,
	type RadiusProp,
} from '@/shared/lib/utilities-props';
import styles from './base-button.module.scss';

export const BaseButton = React.forwardRef(function BaseButton(
	props: BaseButton.Props,
	forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
	const {
		children,
		render,
		className,
		size = '3',
		disabled,
		disableRipple: disableRippleProp,
		disableRippleSpaceKey,
		iconButton,
		fullWidth,
		...otherProps
	} = extractProps(props, radiusPropDef, marginPropDefs);

	const disableRipple = disableRippleProp || disabled;

	const { ripples, containerRef, removeRipple, ...rippleHandlers } = useRipple({
		disableRipple,
		disableSpaceKey: disableRippleSpaceKey,
	});

	const element = useRenderElement('button', {
		render,
		ref: forwardedRef,
		props: [
			{
				className: classNames(
					styles['button'],
					styles[`size-${size}`],
					{
						'disabled': disabled,
						'full-width': fullWidth,
						[styles['icon-button']]: iconButton,
					},
					className
				),
				disabled,
				children: (
					<>
						{children}
						{!disableRipple && (
							<Ripple
								ref={containerRef}
								ripples={ripples}
								removeRipple={removeRipple}
							/>
						)}
					</>
				),
				...rippleHandlers,
			},
			otherProps,
		],
	});

	return element;
});

export namespace BaseButton {
	export type Size = '1' | '2' | '3' | '4';

	export type State = {};
	export interface Props
		extends useRenderElement.ModernComponentProps<'button', State>,
			RadiusProp,
			MarginProps {
		iconButton?: boolean;
		fullWidth?: boolean;
		disableRipple?: boolean;
		disableRippleSpaceKey?: boolean;
		/**
		 * @default '3'
		 */
		size?: Size;
	}
}
