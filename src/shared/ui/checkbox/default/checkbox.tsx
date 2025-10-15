import classNames from 'classnames';
import { Icon } from '@/shared/ui/icons';
import { BaseCheckbox } from '../base';
import { useFormControlLabelContext } from '@/shared/ui/form-control-label';
import { useFormGroupContext } from '@/shared/ui/form-group';
import styles from './checkbox.module.scss';

export function Checkbox(props: CheckboxRoot.Props) {
	const {
		className,
		children,
		disabled: disabledProp,
		readOnly: readOnlyProp,
		required: requiredProp,
        size = '1',
		...otherProps
	} = props;

	const formControlLabelContext = useFormControlLabelContext();
	const formGroupContext = useFormGroupContext();

	const disabled =
		disabledProp || formControlLabelContext?.disabled || formGroupContext?.disabled;
	const required = requiredProp || formControlLabelContext?.required;
	const readOnly =
		readOnlyProp || formControlLabelContext?.readOnly || formGroupContext?.readOnly;

	return (
		<BaseCheckbox.Root
			className={classNames(styles['checkbox'], styles[`size-${size}`], className)}
			disabled={disabled}
			required={required}
			readOnly={readOnly}
			{...otherProps}
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
		</BaseCheckbox.Root>
	);
}

export namespace CheckboxRoot {
	export interface Props extends Omit<BaseCheckbox.Root.Props, 'className' | 'render'> {
		className?: string;
        size?: '1' | '2'
	}
}
