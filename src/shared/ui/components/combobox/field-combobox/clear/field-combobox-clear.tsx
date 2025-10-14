import { Button } from '@/shared/ui/components/button';
import { Icon } from '@/shared/ui/components/icons';
import { Combobox } from '../../styled';

export function FieldComboboxClear(props: FieldComboboxClear.Props) {
	return (
		<Combobox.Clear aria-label="Clear selection" render={<Button />} {...props}>
			<Icon.X />
		</Combobox.Clear>
	);
}

export namespace FieldComboboxClear {
	export interface Props extends Combobox.Clear.Props {}
}