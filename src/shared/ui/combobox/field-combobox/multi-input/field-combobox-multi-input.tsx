import * as React from 'react';
import { Combobox } from '../../styled';
import { Field } from '@/shared/ui/field';
import styles from './field-combobox-multi-input.module.scss';

export const FieldComboboxMultiInput = React.forwardRef(function FieldComboboxMultiInput(
	props: FieldComboboxMultiInput.Props,
	forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
	return (
		<Field.BaseInput
			className={styles['input']}
			ref={forwardedRef}
			render={<Combobox.Input {...props} />}
		/>
	);
});

export namespace FieldComboboxMultiInput {
	export interface Props extends Combobox.Input.Props {}
}
