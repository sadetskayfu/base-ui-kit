import { Field } from '@/shared/ui/field';
import { BaseCombobox } from '../../base';

export function MobileComboboxField(props: MobileComboboxField.Props) {
	const { placeholder } = props;

	return (
		<Field.Root>
			<Field.InputContainer radius="3" size='2'>
				<Field.Input placeholder={placeholder} render={<BaseCombobox.Input />} />
			</Field.InputContainer>
		</Field.Root>
	);
}

export namespace MobileComboboxField {
	export interface Props {
		placeholder?: string;
	}
}
