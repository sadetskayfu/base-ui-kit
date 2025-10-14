import { Button } from '@/shared/ui/components/button';
import { Icon } from '@/shared/ui/components/icons';
import { Combobox } from '../../styled';

export function FieldComboboxTrigger(props: FieldComboboxTrigger.Props) {
	return (
		<Combobox.Trigger aria-label="Open popup" render={<Button />} {...props}>
			<Icon.ChevronDown />
		</Combobox.Trigger>
	);
}

export namespace FieldComboboxTrigger {
	export interface Props extends Combobox.Trigger.Props {}
}
