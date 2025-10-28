import * as React from 'react';
import classNames from 'classnames';
import {
	bgColorPropDef,
	extractProps,
	marginPropDefs,
	radiusPropDef,
	type BgColorProp,
	type MarginProps,
	type RadiusProp,
} from '@/shared/lib/utilities-props';
import styles from './button-field.module.scss';

export const ButtonField = React.forwardRef(function ButtonField(
	props: ButtonField.Props,
	forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
	const {
		className,
		children,
		size = '2',
		fullWidth,
		...otherProps
	} = extractProps(props, marginPropDefs, radiusPropDef, bgColorPropDef);

	return (
		<button
			className={classNames(
				styles['field'],
				styles[`size-${size}`],
				{ ['full-width']: fullWidth },
				className
			)}
			ref={forwardedRef}
			{...otherProps}
		>
			{children}
		</button>
	);
});

export namespace ButtonField {
	export type Size = '1' | '2';

	export interface Props extends React.ComponentProps<'button'>, RadiusProp, MarginProps, BgColorProp {
		size?: Size;
		fullWidth?: boolean;
	}
}
