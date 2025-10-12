import * as React from 'react';
import classNames from 'classnames';
import { useRenderElement } from '@/shared/hooks/use-render-element';
import { Ripple, useRipple } from '@/shared/lib/ripple';
import { extractProps, radiusPropDef, type RadiusProp } from '@/shared/lib/utilities-props';
import styles from './menu-item.module.scss';

/**
 * Renders a `div` element.
 */
export const MenuItem = React.forwardRef(function MenuItem(
	props: MenuItem.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { radius = '2' } = props;

	const {
		className,
		render,
		children,
		disabled,
		visualMargin,
		disableRipple,
		disableRippleSpaceKey,
		...otherProps
	} = extractProps({ ...props, radius }, radiusPropDef);

	const { containerRef, ripples, removeRipple, ...rippleHandlers } = useRipple({
		disableRipple: disableRipple || disabled,
		disableSpaceKey: disableRippleSpaceKey,
	});

	return useRenderElement('div', {
		render,
		ref: forwardedRef,
		props: [
			{
				className: classNames(
					styles['item'],
					visualMargin && styles[`visual-margin-${visualMargin}`],
					{
						[styles['disabled']]: disabled,
					},
					className
				),
				children: (
					<React.Fragment>
						{children}
						{!disableRipple && (
							<Ripple
								ref={containerRef}
								ripples={ripples}
								removeRipple={removeRipple}
							/>
						)}
					</React.Fragment>
				),
				...rippleHandlers,
			},
			otherProps,
		],
	});
});

export namespace MenuItem {
	export type VisualMargin = '1' | '2';

	export interface State {}
	export interface Props
		extends Pick<
				useRenderElement.ModernComponentProps<'div', State>,
				'render' | 'className' | 'children'
			>,
			RadiusProp {
		disabled?: boolean;
		visualMargin?: VisualMargin;
		disableRipple?: boolean;
		disableRippleSpaceKey?: boolean;
	}
}
