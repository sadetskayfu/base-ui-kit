import * as React from 'react';
import { Field } from '@/shared/ui/field';
import { useFieldComboboxRootContext } from '../root/field-combobox-root-context';
import { useMergedRefs } from '@base-ui-components/utils/useMergedRefs';

export const FieldComboboxInputContainer = React.forwardRef(function FieldComboboxInputContainer(
	props: FieldComboboxInputContainer.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { inputContainerRef } = useFieldComboboxRootContext();

	return <Field.InputContainer ref={useMergedRefs(forwardedRef, inputContainerRef)} {...props} />;
});

export namespace FieldComboboxInputContainer {
	export interface Props extends Field.InputContainer.Props {}
}
