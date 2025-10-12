import * as React from 'react';
import classNames from 'classnames';
import { BaseChip } from '../../base';
import { Ripple, useRipple } from '@/shared/lib/ripple';
import { mergeProps } from '@base-ui-components/react';
import { ChipContext, useChipContext } from '../provider/chip-context';
import { extractProps, marginPropDefs, type MarginProps } from '@/shared/lib/utilities-props';
import styles from './chip-root.module.scss';

/**
 * Renders a `<div>` element.
 */
export const ChipRoot = React.forwardRef(function ChipRoot(
	props: ChipRoot.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		className,
		children,
		size: sizeProp,
		color: colorProp,
		variant: variantProp,
		radius: radiusProp,
		disableRipple = true,
		disableRippleSpaceKey,
		interactive,
		disabled,
		...otherProps
	} = extractProps(props, marginPropDefs);

	const context = useChipContext(false);

	const { containerRef, ripples, removeRipple, ...rippleHandlers } = useRipple({
		disableRipple: disableRipple || disabled,
		disableSpaceKey: disableRippleSpaceKey,
	});

	const mergedProps = mergeProps(rippleHandlers, otherProps);

	const size: ChipRoot.Size = sizeProp || context?.size || '2';
	const color: ChipRoot.Color = colorProp || context?.color || 'secondary';
	const variant: ChipRoot.Variant = variantProp || context?.variant || 'ghost';
	const radius: ChipRoot.Radius = radiusProp || context?.radius || '1';

	const contextValue: ChipContext = React.useMemo(
		() => ({ color, size, variant, radius }),
		[color, size, variant, radius]
	);

	return (
		<BaseChip.Root
			ref={forwardedRef}
			className={classNames(
				styles['chip'],
				styles[`size-${size}`],
				styles[`color-${color}`],
				styles[`variant-${variant}`],
				styles[`radius-${radius}`],
				{
					[styles['disabled']]: disabled,
					[styles['interactive']]: interactive,
				},
				className
			)}
			disabled={disabled}
			{...mergedProps}
		>
			<ChipContext.Provider value={contextValue}>{children}</ChipContext.Provider>
			{!disableRipple && (
				<Ripple ref={containerRef} ripples={ripples} removeRipple={removeRipple} />
			)}
		</BaseChip.Root>
	);
});

export namespace ChipRoot {
	export type Size = '1' | '2';
	export type Color = 'accent' | 'secondary';
	export type Variant = 'ghost';
	export type Radius = '1' | 'full';

	export interface Props extends BaseChip.Root.Props, MarginProps {
		/**
		 * @default '2'
		 */
		size?: Size;
		/**
		 * @default 'secondary'
		 */
		color?: Color;
		/**
		 * @default 'ghost'
		 */
		variant?: Variant;
		radius?: Radius;
		/**
		 * @default true
		 */
		disableRipple?: boolean;
		/**
		 * @default false
		 */
		disableRippleSpaceKey?: boolean;
		/**
		 * @default false
		 */
		interactive?: boolean;
	}
}
