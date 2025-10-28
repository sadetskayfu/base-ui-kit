import { FormGroup } from '../../form-group';
import { Flex } from '../../flex';
import { BaseRadioGroup } from '../../base/radio-group';

export function RadioGroupRoot<Value extends string>(props: RadioGroupRoot.Props<Value>) {
	const { onValueChange, readOnly, disabled, ...otherProps } = props;

	return (
		<BaseRadioGroup
			onValueChange={
				onValueChange as (
					value: unknown,
					eventDetails: BaseRadioGroup.ChangeEventDetails
				) => void
			}
			disabled={disabled}
			readOnly={readOnly}
			render={<FormGroup.Root disabled={disabled} readOnly={readOnly} />}
			{...otherProps}
		/>
	);
}

export namespace RadioGroupRoot {
	export interface Props<Value extends string>
		extends Omit<BaseRadioGroup.Props, 'value' | 'onValueChange' | 'className'>,
			Flex.OwnProps {
		className?: string;
		value?: Value;
		onValueChange?: (value: Value, eventDetails: BaseRadioGroup.ChangeEventDetails) => void;
	}
}
