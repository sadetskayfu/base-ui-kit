import classNames from 'classnames';
import { Icon } from '../icons';
import { BaseCheckbox } from '../base/checkbox';
import { useFormControlLabelContext } from '../form-control-label';
import { useFormGroupContext } from '../form-group';
import styles from './checkbox.module.scss';

export function Checkbox(props: CheckboxRoot.Props) {
	const { className, children, disabled, readOnly, required, size = '2', ...otherProps } = props;

	const formControlLabelContext = useFormControlLabelContext();
	const groupContext = useFormGroupContext();

	return (
		<BaseCheckbox.Root
			className={classNames(styles['checkbox'], styles[`size-${size}`], className)}
			disabled={disabled || formControlLabelContext?.disabled || groupContext?.disabled}
			required={required || formControlLabelContext?.required}
			readOnly={readOnly || formControlLabelContext?.readOnly || groupContext?.readOnly}
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
		size?: '2';
	}
}
