import * as React from 'react';
import { Field } from '../../field';
import { BaseNumberField } from '../../base/number-field';

export const NumberFieldInput = React.forwardRef(function NumberFieldInput(
	props: BaseNumberField.Input.Props,
	forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
	return <BaseNumberField.Input ref={forwardedRef} render={<Field.Input />} {...props} />;
});
