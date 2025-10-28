import * as React from 'react';
import classNames from 'classnames';
import { BaseField } from '../../base/field';
import {
	bgColorPropDef,
	extractProps,
	marginPropDefs,
	radiusPropDef,
	type BgColorProp,
	type MarginProps,
	type RadiusProp,
} from '@/shared/lib/utilities-props';
import styles from './field-input-container.module.scss';

export const FieldInputContainer = React.forwardRef(function FieldInputContainer(
	props: FieldInputContainer.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		children,
		className,
		size = '2',
		fullWidth,
		...otherProps
	} = extractProps(props, marginPropDefs, radiusPropDef, bgColorPropDef);

	return (
		<BaseField.InputContainer
			ref={forwardedRef}
			className={classNames(
				styles['input-container'],
				styles[`size-${size}`],
				{ ['full-width']: fullWidth },
				className
			)}
			{...otherProps}
		>
			{children}
		</BaseField.InputContainer>
	);
});

export namespace FieldInputContainer {
	export type Size = '1' | '2';

	export interface Props extends BaseField.InputContainer.Props, RadiusProp, MarginProps, BgColorProp {
		size?: Size;
		fullWidth?: boolean;
	}
}
