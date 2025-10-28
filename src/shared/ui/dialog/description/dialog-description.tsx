import { Text } from '../../text';
import { BaseDialog } from '../../base/dialog';

export function DialogDescription(props: Text.Props) {
	const { tag = 'p', ...otherProps } = props;

	return <BaseDialog.Description render={<Text tag={tag} />} {...otherProps} />;
}
