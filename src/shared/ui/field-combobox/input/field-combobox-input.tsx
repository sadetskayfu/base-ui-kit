import * as React from 'react';
import { Combobox } from '../../combobox';
import { Field } from '../../field';

export const FieldComboboxInput = React.forwardRef(function FieldComboboxInput(
	props: FieldComboboxInput.Props,
	forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
	return <Field.Input ref={forwardedRef} render={<Combobox.Input {...props} />} />;
});

export namespace FieldComboboxInput {
	export interface Props extends Combobox.Input.Props {}
}
