import { BaseCombobox } from '../../base';

export function ComboboxMultiValue(props: ComboboxMultiValue.Props) {
	const { placeholder, getLabel } = props;

	return (
		<BaseCombobox.Value>
			{(value: any[]) => {
				if (value.length === 0) {
					return placeholder;
				}
				if (value.length === 1) {
					return getLabel ? getLabel(`${value[0]}`, value) : value[0];
				}
				return getLabel
					? getLabel(`${value[0]} (+${value.length - 1})`, value)
					: `${value[0]} (+${value.length - 1})`;
			}}
		</BaseCombobox.Value>
	);
}

export namespace ComboboxMultiValue {
	export interface Props {
		placeholder?: string | React.ReactElement;
		getLabel?: (label: string, value: any[]) => string | React.ReactElement;
	}
}
