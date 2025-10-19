import { Text } from '@/shared/ui/text';
import { BaseDialog } from '../../base';

export function DialogTitle(props: Text.Props) {
	const { size = '4', color = 'hard', weight = 'medium', ...otherProps } = props;

	return (
		<BaseDialog.Title
			render={<Text size={size} color={color} weight={weight} />}
			{...otherProps}
		/>
	);
}
