import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
import { Combobox } from '../../styled';

export function FieldComboboxTrigger(props: FieldComboboxTrigger.Props) {
	return (
		<Combobox.Trigger aria-label="Открыть всплывающее окно" render={<Button />} {...props}>
			<Icon.ChevronDown />
		</Combobox.Trigger>
	);
}

export namespace FieldComboboxTrigger {
	export interface Props extends Combobox.Trigger.Props {}
}
