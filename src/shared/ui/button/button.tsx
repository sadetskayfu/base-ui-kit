import * as React from 'react';
import classNames from 'classnames';
import { BaseButton } from '../base-button';
import { Loader } from '../loader';
import { useButtonContext } from './provider/button-context';
import styles from './button.module.scss';

export const Button = React.forwardRef(function Button(
	props: Button.Props,
	forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
	const {
		className,
		children,
		variant,
		color,
		size,
		radius: radiusProp,
		loading: loadingProp,
		disabled: disabledProp,
		iconButton,
		disableRipple,
		autoFontSize,
		...otherProps
	} = props;

	const context = useButtonContext();

	const loading = loadingProp || context?.loading;
	const disabled = disabledProp || context?.disabled;
	const radius = radiusProp || context?.radius

	return (
		<BaseButton
			ref={forwardedRef}
			className={classNames(
				styles['button'],
				styles[`variant-${variant || context?.variant || 'filled'}`],
				styles[`color-${color || context?.color || 'accent'}`],
				{
					[styles['loading']]: loading,
					[styles['disabled']]: disabled,
				},
				className
			)}
			disableRipple={disableRipple || loading}
			disabled={disabled}
			iconButton={iconButton || context?.iconButton}
			size={size || context?.size}
			radius={radius || context?.radius}
			autoFontSize={autoFontSize || context?.autoFontSize}
			{...otherProps}
		>
			{children}
			{loading && <Loader absCenter className={styles['loader']} />}
		</BaseButton>
	);
});

export namespace Button {
	export type Variant = 'filled' | 'ghost' | 'outlined' | 'clear';
	export type Color = 'accent' | 'secondary' | 'secondary-soft' | 'error' | 'success' | 'warning';

	export interface Props extends BaseButton.Props {
		/**
		 * @default 'filled'
		 */
		variant?: Variant;
		/**
		 * @default 'accent'
		 */
		color?: Color;
		loading?: boolean;
	}
}
