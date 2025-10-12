import { CheckboxGroup as BCheckboxGroup } from '@base-ui-components/react';
import { FormGroup } from '@/shared/ui/components/form-group';

export function CheckboxGroupRoot<Value extends string[]>(props: CheckboxGroupRoot.Props<Value>) {
	const { children, onValueChange, readOnly, disabled, ...otherProps } = props;

	return (
		<FormGroup.Root
			disabled={disabled}
			readOnly={readOnly}
			render={
				<BCheckboxGroup
					onValueChange={
						onValueChange as (
							value: string[],
							eventDetails: BCheckboxGroup.ChangeEventDetails
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
		extends Omit<BCheckboxGroup.Props, 'onValueChange' | 'className'> {
		className?: string;
		value?: Value;
		onValueChange?: (value: Value, eventDetails: BCheckboxGroup.ChangeEventDetails) => void;
		disabled?: boolean;
		readOnly?: boolean;
	}
}
