import { FormGroup } from '../../form-group';
import { Flex } from '../../flex';
import { BaseCheckboxGroup } from '../../base/checkbox-group';

export function CheckboxGroupRoot<Value extends string[]>(props: CheckboxGroupRoot.Props<Value>) {
	const { onValueChange, disabled, readOnly, ...otherProps } = props;

	return (
		<BaseCheckboxGroup
			onValueChange={
				onValueChange as (
					value: string[],
					eventDetails: BaseCheckboxGroup.ChangeEventDetails
				) => void
			}
			disabled={disabled}
			render={<FormGroup.Root disabled={disabled} readOnly={readOnly} />}
			{...otherProps}
		/>
	);
}

export namespace CheckboxGroupRoot {
	export interface Props<Value extends string[]>
		extends Omit<BaseCheckboxGroup.Props, 'onValueChange' | 'className'>,
			Flex.OwnProps {
		className?: string;
		value?: Value;
		onValueChange?: (value: Value, eventDetails: BaseCheckboxGroup.ChangeEventDetails) => void;
		readOnly?: boolean;
	}
}
