import classNames from 'classnames';
import { Ripple, useRipple } from '@/shared/lib/ripple';
import { Icon } from '@/shared/ui/components/icons';
import { BaseCheckbox } from '../base';
import { mergeProps } from '@base-ui-components/react';
import { useFormControlLabelContext } from '@/shared/ui/components/form-control-label';
import { useFormGroupContext } from '@/shared/ui/components/form-group';
import styles from './checkbox.module.scss';

export function Checkbox(props: CheckboxRoot.Props) {
	const {
		className,
		children,
		disabled: disabledProp,
		readOnly: readOnlyProp,
		required: requiredProp,
		...otherProps
	} = props;

	const { containerRef, removeRipple, ripples, ...rippleHandlers } = useRipple({
		centering: true,
	});

	const mergedProps = mergeProps(rippleHandlers, otherProps);

	const formControlLabelContext = useFormControlLabelContext();
	const formGroupContext = useFormGroupContext();

	const disabled =
		disabledProp || formControlLabelContext?.disabled || formGroupContext?.disabled;
	const required = requiredProp || formControlLabelContext?.required;
	const readOnly =
		readOnlyProp || formControlLabelContext?.readOnly || formGroupContext?.readOnly;

	return (
		<BaseCheckbox.Root
			className={classNames(styles['checkbox'], { ['disabled']: disabled }, className)}
			disabled={disabled}
			required={required}
			readOnly={readOnly}
			{...mergedProps}
		>
			<BaseCheckbox.Indicator
				className={styles['indicator']}
				render={(props, state) => (
					<span {...props}>
						{state.indeterminate ? (
							<Icon.Minus className={styles['check-icon']} />
						) : (
							<Icon.Check className={styles['check-icon']} />
						)}
					</span>
				)}
			/>
			{children}
			<Ripple ref={containerRef} removeRipple={removeRipple} ripples={ripples} size="small" />
		</BaseCheckbox.Root>
	);
}

export namespace CheckboxRoot {
	export interface Props extends Omit<BaseCheckbox.Root.Props, 'className' | 'render'> {
		className?: string;
	}
}
