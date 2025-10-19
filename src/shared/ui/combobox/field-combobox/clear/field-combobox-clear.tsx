import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
import { Combobox } from '../../styled';

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