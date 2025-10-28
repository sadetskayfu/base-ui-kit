import classNames from 'classnames';
import { BaseSwitch } from '../base/switch';
import { useFormControlLabelContext } from '../form-control-label';
import { useFormGroupContext } from '../form-group';
import styles from './switch.module.scss';

export function Switch(props: Switch.Props) {
	const { className, size = '2', disabled, required, readOnly, ...otherProps } = props;

	const formControlLabelContext = useFormControlLabelContext();
    const groupContext = useFormGroupContext();

	return (
		<BaseSwitch.Root
			className={classNames(styles['switch'], styles[`size-${size}`], className)}
			disabled={disabled || formControlLabelContext?.disabled || groupContext?.disabled}
			required={required || formControlLabelContext?.required}
			readOnly={readOnly || formControlLabelContext?.readOnly || groupContext?.readOnly}
			{...otherProps}
		/>
	);
}

export namespace Switch {
	export interface Props extends Omit<BaseSwitch.Root.Props, 'className'> {
		className?: string;
		size?: '2';
	}
}
