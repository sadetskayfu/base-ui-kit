import { Text } from '@/shared/ui/components/text';
import { BasePopover } from '../base';

export function PopoverTitle(props: Text.Props) {
	return <BasePopover.Title render={<Text />} {...props} />;
}
