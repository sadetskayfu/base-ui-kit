import { Text } from '@/shared/ui/components/text';
import { BasePopover } from '../base';

export function PopoverDescription(props: Text.Props) {
	const { tag = 'p', ...otherProps } = props;

	return <BasePopover.Description render={<Text tag={tag} />} {...otherProps} />;
}
