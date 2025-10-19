import { BaseCombobox } from '../base';

export { ComboboxPopup as Popup } from './popup/combobox-popup';
export { ComboboxIcon as Icon } from './icon/combobox-icon';
export { ComboboxItem as Item } from './item/combobox-item';
export { ComboboxItemIndicator as ItemIndicator } from './item-indicator/combobox-item-indicator';
export { ComboboxCheckboxItem as CheckboxItem } from './checkbox-item/combobox-checkbox-item';
export { ComboboxRadioItem as RadioItem } from './radio-item/combobox-radio-item';
export { ComboboxGroupLabel as GroupLabel } from './group-label/combobox-group-label';
export { ComboboxStickyGroupLabel as StickyGroupLabel } from './sticky-group-label/combobox-sticky-group-label';
export { ComboboxEmpty as Empty } from './empty/combobox-empty';
export { ComboboxChip as Chip } from './chip/combobox-chip';
export { ComboboxValue as Value } from './value/combobox-value'
export { ComboboxMultiValue as MultiValue } from './multi-value/combobox-multi-value'

export const Root = BaseCombobox.Root;
export const Trigger = BaseCombobox.Trigger;
export const Group = BaseCombobox.Group;
export const BaseValue = BaseCombobox.Value;
export const List = BaseCombobox.List;
export const Collection = BaseCombobox.Collection;
export const Clear = BaseCombobox.Clear;
export const Row = BaseCombobox.Row;
export const Status = BaseCombobox.Status;
export const Input = BaseCombobox.Input;
export const Chips = BaseCombobox.Chips;

export { Avatar as ChipAvatar, Label as ChipLabel } from '@/shared/ui/chip/styled/index.parts';

export {
	ScrollArea,
	Separator,
	ItemContent,
} from '@/shared/ui/menu-components/index.parts';

export namespace Root {
	export interface Props<
		ItemValue,
		SelectedValue = ItemValue,
		Multiple extends boolean | undefined = false,
	> extends BaseCombobox.Root.Props<ItemValue, SelectedValue, Multiple> {}
}
export namespace Input {
	export interface Props extends BaseCombobox.Input.Props {}
}
export namespace Trigger {
	export interface Props extends BaseCombobox.Trigger.Props {}
}
export namespace Clear {
	export interface Props extends BaseCombobox.Clear.Props {}
}
