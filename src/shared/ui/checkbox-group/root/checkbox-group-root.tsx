import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui-components/react';
import { FormGroup } from '@/shared/ui/form-group';

export function CheckboxGroupRoot<Value extends string[]>(props: CheckboxGroupRoot.Props<Value>) {
	const { children, onValueChange, readOnly, disabled, ...otherProps } = props;

	return (
		<FormGroup.Root
			disabled={disabled}
			readOnly={readOnly}
			render={
				<BaseCheckboxGroup
					onValueChange={
						onValueChange as (
							value: string[],
							eventDetails: BaseCheckboxGroup.ChangeEventDetails
						) => void
					}
					{...otherProps}
				/>
			}
		>
			{children}
		</FormGroup.Root>
	);
}

export namespace CheckboxGroupRoot {
	export interface Props<Value extends string[]>
		extends Omit<BaseCheckboxGroup.Props, 'onValueChange' | 'className'> {
		className?: string;
		value?: Value;
		onValueChange?: (value: Value, eventDetails: BaseCheckboxGroup.ChangeEventDetails) => void;
		disabled?: boolean;
		readOnly?: boolean;
	}
}
