import * as React from 'react';
import classNames from 'classnames';
import { BaseField } from '../../base';
import { useFieldContext } from '../provider/field-context';
import {
	extractProps,
	marginPropDefs,
	radiusPropDef,
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
		size: sizeProp,
		radius: radiusProp,
		fullWidth: fullWidthProp,
		...otherProps
	} = props;

	const context = useFieldContext();

	const size = sizeProp || context?.size || '2';
	const radius = radiusProp || context?.radius;
	const fullWidth = fullWidthProp || context?.fullWidth;

	const { className, ...otherFieldProps } = extractProps(
		{ ...otherProps, radius },
		radiusPropDef,
		marginPropDefs
	);

	return (
		<BaseField.InputContainer
			ref={forwardedRef}
			className={classNames(
				styles['input-container'],
				styles[`size-${size}`],
				{ ['full-width']: fullWidth },
				className
			)}
			{...otherFieldProps}
		>
			{children}
		</BaseField.InputContainer>
	);
});

export namespace FieldInputContainer {
	export type Size = '1' | '2';

	export interface Props extends BaseField.InputContainer.Props, RadiusProp, MarginProps {
		size?: Size;
		fullWidth?: boolean;
	}
}
