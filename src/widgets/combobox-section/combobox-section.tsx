import { SingleFieldCombobox } from './ui/single-field-combobox';
import { MultiFieldCombobox } from './ui/multi-field-combobox';
import { Grid } from '@/shared/ui/components/grid';
import { GroupCombobox } from './ui/group-combobox';
import { InputInsidePopupCombobox } from './ui/input-inside-popup-combobox';

export function ComboboxSection() {
	return (
		<Grid columns='4' gap='3'>
			<SingleFieldCombobox />
			<MultiFieldCombobox />
            <GroupCombobox />
            <InputInsidePopupCombobox />
		</Grid>
	);
}
