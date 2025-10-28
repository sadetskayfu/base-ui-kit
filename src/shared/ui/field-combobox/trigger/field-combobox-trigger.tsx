import { Button } from '../../button';
import { Icon } from '../../icons';
import { Combobox } from '../../combobox';

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
