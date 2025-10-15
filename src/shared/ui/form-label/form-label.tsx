import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@/shared/ui/text';
import { useFormControlLabelContext } from '@/shared/ui/form-control-label';
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
		...otherProps
	} = props;

	const formControlLabelContext = useFormControlLabelContext();

	const required = requiredProp || formControlLabelContext?.required;
	const disabled = disabledProp || formControlLabelContext?.disabled;

	return (
		<Text
			ref={forwardedRef}
			className={classNames(styles['form-label'], { ['disabled']: disabled }, className)}
			wrap="nowrap"
			weight='medium'
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
