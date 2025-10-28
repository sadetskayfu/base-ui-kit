import { BaseNumberField } from '../../base/number-field';
import { Field } from '../../field';

export function NumberFieldRoot(props: NumberFieldRoot.Props) {
	const { disabled, readOnly, required, ...otherProps } = props;

	const mods = { disabled, readOnly, required };

	return <BaseNumberField.Root {...mods} render={<Field.Root {...mods} />} {...otherProps} />;
}

export namespace NumberFieldRoot {
	export interface Props extends Omit<BaseNumberField.Root.Props, 'className'> {
		className?: string;
		errored?: boolean;
	}
}
