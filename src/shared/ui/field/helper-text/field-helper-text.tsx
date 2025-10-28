import { BaseField } from '../../base/field';
import { Text } from '../../text';

/**
 * Renders a `<Text>` component.
 */
export function FieldHelperText(props: Text.Props) {
	const { tag = 'p', ...otherProps } = props;

	return <BaseField.HelperText render={<Text tag={tag} />} {...otherProps} />;
}
