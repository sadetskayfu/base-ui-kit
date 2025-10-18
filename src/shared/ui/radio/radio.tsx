import classNames from 'classnames';
import { BaseRadio } from './base';
import { useFormControlLabelContext } from '@/shared/ui/form-control-label';
import { useFormGroupContext } from '@/shared/ui/form-group';
import styles from './radio.module.scss';

export function Radio(props: Radio.Props) {
	const { className, size = '2', disabled, required, readOnly, ...otherProps } = props;

	const formControlLabelContext = useFormControlLabelContext();
    const groupContext = useFormGroupContext();

	return (
		<BaseRadio.Root
			className={classNames(styles['radio'], styles[`size-${size}`], className)}
			disabled={disabled || formControlLabelContext?.disabled || groupContext?.disabled}
			required={required || formControlLabelContext?.required}
			readOnly={readOnly || formControlLabelContext?.readOnly || groupContext?.readOnly}
			{...otherProps}
		/>
	);
}

export namespace Radio {
	export interface Props extends Omit<BaseRadio.Root.Props, 'className'> {
		className?: string;
		size?: '2';
	}
}
