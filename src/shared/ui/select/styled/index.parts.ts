import { BaseSelect } from '../base';

export { SelectPopup as Popup } from './popup/select-popup';
export { SelectIcon as Icon } from './icon/select-icon';
export { SelectItem as Item } from './item/select-item';
export { SelectItemIndicator as ItemIndicator } from './item-indicator/select-item-indicator';
export { SelectCheckboxItem as CheckboxItem } from './checkbox-item/select-checkbox-item';
export { SelectRadioItem as RadioItem } from './radio-item/select-radio-item';
export { SelectGroupLabel as GroupLabel } from './group-label/select-group-label';
export { SelectStickyGroupLabel as StickyGroupLabel } from './sticky-group-label/select-sticky-group-label';
export { SelectValue as Value } from './value/select-value'
export { SelectMultiValue as MultiValue } from './multi-value/select-multi-value'

export const Root = BaseSelect.Root
export const Trigger = BaseSelect.Trigger;
export const Group = BaseSelect.Group;
export const Portal = BaseSelect.Portal;
export const List = BaseSelect.List;
export const ItemText = BaseSelect.ItemText;
export const BaseValue = BaseSelect.Value

export {
	ScrollArea,
	Separator,
	ItemContent,
} from '@/shared/ui/menu-components/index.parts';
