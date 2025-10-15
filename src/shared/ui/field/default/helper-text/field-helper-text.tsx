import { BaseField } from '../../base';
import { Text } from '@/shared/ui/text';

/**
 * Renders a `<Text>` component.
 */
export function FieldHelperText(props: Text.Props) {
	const { tag = 'p', ...otherProps } = props;

	return <BaseField.HelperText render={<Text tag={tag} />} {...otherProps} />;
}
