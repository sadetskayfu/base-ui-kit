import { Text } from '../../text';
import { BasePopover } from '../../base/popover';

export function PopoverTitle(props: Text.Props) {
	const { size = '4', color = 'hard', weight = 'medium', ...otherProps } = props;

	return (
		<BasePopover.Title
			render={<Text size={size} color={color} weight={weight} />}
			{...otherProps}
		/>
	);
}
