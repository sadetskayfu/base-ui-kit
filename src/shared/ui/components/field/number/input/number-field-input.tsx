import * as React from 'react';
import { Field } from '../../default';
import { BaseNumberField } from '@/shared/ui/components/base-number-field';

export const NumberFieldInput = React.forwardRef(function NumberFieldInput(
	props: BaseNumberField.Input.Props,
	forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
	return <BaseNumberField.Input ref={forwardedRef} render={<Field.Input />} {...props} />;
});
