import { BaseCombobox } from '../../base';

export function ComboboxValue(props: ComboboxValue.Props) {
	const { getLabel = value => value, renderLabel, placeholder } = props;

	return (
		<BaseCombobox.Value>
			{(value: any) => {
				if (value) {
					return renderLabel ? renderLabel(`${getLabel(value)}`) : `${getLabel(value)}`;
				}
				return placeholder;
			}}
		</BaseCombobox.Value>
	);
}

export namespace ComboboxValue {
	export interface Props {
		placeholder?: string | React.ReactElement;
		getLabel?: (value: any) => string;
		renderLabel?: (label: string) => React.ReactNode;
	}
}
