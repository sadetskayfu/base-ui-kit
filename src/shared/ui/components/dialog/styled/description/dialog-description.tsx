import { Text } from '@/shared/ui/components/text';
import { BaseDialog } from '../../base';

export function DialogDescription(props: Text.Props) {
	const { tag = 'p', ...otherProps } = props;

	return <BaseDialog.Description render={<Text tag={tag} />} {...otherProps} />;
}
