import { BaseCombobox } from '../../base';

export function MobileComboboxChips(props: MobileComboboxChips.Props) {
	return <BaseCombobox.Chips {...props} />;
}

export namespace MobileComboboxChips {
	export interface Props extends BaseCombobox.Chips.Props {}
}
