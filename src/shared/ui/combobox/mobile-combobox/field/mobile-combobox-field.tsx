import { Field } from '@/shared/ui/field';
import { BaseCombobox } from '../../base';

export function MobileComboboxField(props: MobileComboboxField.Props) {
	const { placeholder, radius = '3', size = '2', mb = '4', ...otherProps } = props;

	return (
		<Field.Root>
			<Field.InputContainer radius={radius} size={size} mb={mb} {...otherProps}>
				<Field.Input placeholder={placeholder} render={<BaseCombobox.Input />} />
			</Field.InputContainer>
		</Field.Root>
	);
}

export namespace MobileComboboxField {
	export interface Props extends Field.InputContainer.Props {
		placeholder?: string;
	}
}
