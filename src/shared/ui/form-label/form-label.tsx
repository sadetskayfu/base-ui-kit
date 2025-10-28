import * as React from 'react';
import classNames from 'classnames';
import { Text } from '../text';
import { useFormControlLabelContext } from '../form-control-label';
import styles from './form-label.module.scss';

/**
 * Renders a `<Text>` component.
 */
export const FormLabel = React.forwardRef(function FormLabel(
	props: FormLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		children,
		className,
		required: requiredProp,
		disabled: disabledProp,
		wrap = 'nowrap',
		...otherProps
	} = props;

	const formControlLabelContext = useFormControlLabelContext();

	const required = requiredProp || formControlLabelContext?.required;
	const disabled = disabledProp || formControlLabelContext?.disabled;

	return (
		<Text
			ref={forwardedRef}
			className={classNames(styles['form-label'], { ['disabled']: disabled }, className)}
			wrap={wrap}
			{...otherProps}
		>
			{required ? (
				<>
					<span>{children}</span>
					<span aria-hidden="true">*</span>
				</>
			) : (
				children
			)}
		</Text>
	);
});

export namespace FormLabel {
	export interface Props extends Text.Props {
		required?: boolean;
		disabled?: boolean;
	}
}
