import { BaseMenu } from '../base';

export { MenuArrow as Arrow } from './arrow/menu-arrow';
export { MenuBackdrop as Backdrop } from './backdrop/menu-backdrop';
export { MenuPopup as Popup } from './popup/menu-popup';
export { MenuPositioner as Positioner } from './positioner/menu-positioner';
export { MenuSubmenuRoot as SubmenuRoot } from './submenu-root/menu-submenu-root';
export { MenuSubmenuTrigger as SubmenuTrigger } from './submenu-trigger/menu-submenu-trigger';
export { MenuIcon as Icon } from './icon/menu-icon';
export { MenuItem as Item } from './item/menu-item';
export { MenuCheckboxItem as CheckboxItem } from './checkbox-item/menu-checkbox-item';
export { MenuSwitchItem as SwitchItem } from './switch-item/menu-switch-item';
export { MenuRadioItem as RadioItem } from './radio-item/menu-radio-item';
export { MenuGroupLabel as GroupLabel } from './group-label/menu-group-label';
export { MenuStickyGroupLabel as StickyGroupLabel } from './sticky-group-label/menu-sticky-group-label';

export {
	ScrollArea,
	Separator,
	ItemContent,
} from '@/shared/ui/menu-components/index.parts';

export const Root = BaseMenu.Root;
export const Trigger = BaseMenu.Trigger;
export const Group = BaseMenu.Group;
export const Portal = BaseMenu.Portal;
export const RadioGroup = BaseMenu.RadioGroup;
