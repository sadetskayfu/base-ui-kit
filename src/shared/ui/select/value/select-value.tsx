import { BaseSelect } from '../../base/select';

export function SelectValue(props: SelectValue.Props) {
	const { getLabel = value => value, renderLabel, placeholder } = props;

	return (
		<BaseSelect.Value>
			{(value: any) => {
				if (value) {
					return renderLabel ? renderLabel(`${getLabel(value)}`) : `${getLabel(value)}`;
				}
				return placeholder;
			}}
		</BaseSelect.Value>
	);
}

export namespace SelectValue {
	export interface Props {
		placeholder?: string | React.ReactElement;
		getLabel?: (value: any) => string;
		renderLabel?: (label: string) => React.ReactNode;
	}
}
