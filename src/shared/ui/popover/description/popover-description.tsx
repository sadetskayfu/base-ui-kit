import { Text } from '../../text';
import { BasePopover } from '../../base/popover';

export function PopoverDescription(props: Text.Props) {
	const { tag = 'p', ...otherProps } = props;

	return <BasePopover.Description render={<Text tag={tag} />} {...otherProps} />;
}
