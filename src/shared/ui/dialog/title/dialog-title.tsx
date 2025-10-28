import { Text } from '../../text';
import { BaseDialog } from '../../base/dialog';

export function DialogTitle(props: Text.Props) {
	const { size = '4', color = 'hard', weight = 'medium', ...otherProps } = props;

	return (
		<BaseDialog.Title
			render={<Text size={size} color={color} weight={weight} />}
			{...otherProps}
		/>
	);
}
