import { BaseSelect } from '../../base/select';

export function SelectMultiValue(props: SelectMultiValue.Props) {
	const { placeholder, getLabel = value => value, renderLabel } = props;

	return (
		<BaseSelect.Value>
			{(value: any[]) => {
				if (value.length === 0) {
					return placeholder;
				}
				if (value.length === 1) {
					return renderLabel
						? renderLabel(`${getLabel(value[0])}`)
						: `${getLabel(value[0])}`;
				}
				return renderLabel
					? renderLabel(`${getLabel(value[0])} (+${value.length - 1})`)
					: `${getLabel(value[0])} (+${value.length - 1})`;
			}}
		</BaseSelect.Value>
	);
}

export namespace SelectMultiValue {
	export interface Props {
		placeholder?: string | React.ReactElement;
		getLabel?: (value: any) => string;
		renderLabel?: (label: string) => React.ReactNode;
	}
}
