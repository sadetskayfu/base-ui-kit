import { Button } from '../../button';
import { Icon } from '../../icons';
import { Combobox } from '../../combobox';

export function FieldComboboxClear(props: FieldComboboxClear.Props) {
	return (
		<Combobox.Clear aria-label="Очистить" render={<Button />} {...props}>
			<Icon.X />
		</Combobox.Clear>
	);
}

export namespace FieldComboboxClear {
	export interface Props extends Combobox.Clear.Props {}
}