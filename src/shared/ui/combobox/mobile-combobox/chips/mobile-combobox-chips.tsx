import { Flex } from '@/shared/ui/flex';
import { BaseCombobox } from '../../base';

export function MobileComboboxChips(props: MobileComboboxChips.Props) {
	const { gapY = '3', direction = 'column', ...otherProps } = props;

	return (
		<BaseCombobox.Chips render={<Flex direction={direction} gapY={gapY} />} {...otherProps} />
	);
}

export namespace MobileComboboxChips {
	export interface Props extends BaseCombobox.Chips.Props, Flex.OwnProps {}
}
