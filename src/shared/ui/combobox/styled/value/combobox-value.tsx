import { BaseCombobox } from '../../base';

export function ComboboxValue(props: ComboboxValue.Props) {
	const { getLabel, placeholder } = props;

	return (
		<BaseCombobox.Value>
			{(value: any) => {
				if (value) {
					return getLabel ? getLabel(value) : value;
				}
				return placeholder;
			}}
		</BaseCombobox.Value>
	);
}

export namespace ComboboxValue {
	export interface Props {
		placeholder?: string | React.ReactElement;
		getLabel?: (value: any) => string | React.ReactElement;
	}
}
