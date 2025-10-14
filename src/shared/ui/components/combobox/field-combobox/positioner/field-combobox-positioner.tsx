import { Combobox } from '../../styled';
import { useFieldComboboxRootContext } from '../root/field-combobox-root-context';

export function FieldComboboxPositioner(props: FieldComboboxPositioner.Props) {
	const { inputContainerRef } = useFieldComboboxRootContext();

	return <Combobox.Positioner anchor={inputContainerRef} {...props} />;
}

export namespace FieldComboboxPositioner {
	export interface Props extends Combobox.Positioner.Props {}
}
