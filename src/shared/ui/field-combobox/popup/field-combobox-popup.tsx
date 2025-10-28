import { Combobox } from '../../combobox';
import { useFieldComboboxRootContext } from '../root/field-combobox-root-context';

export function FieldComboboxPopup(props: FieldComboboxPopup.Props) {
	const { inputContainerRef } = useFieldComboboxRootContext();

	return <Combobox.Popup positionerProps={{ anchor: inputContainerRef }} {...props} />;
}

export namespace FieldComboboxPopup {
	export interface Props extends Combobox.Popup.Props {}
}
