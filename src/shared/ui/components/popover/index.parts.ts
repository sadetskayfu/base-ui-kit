import { BasePopover } from './base';

export { PopoverArrow as Arrow } from './arrow/popover-arrow';
export { PopoverPopup as Popup } from './popup/popover-popup';
export { PopoverPositioner as Positioner } from './positioner/popover-positioner';
export { PopoverBackdrop as Backdrop } from './backdrop/popover-backdrop';
export { PopoverTitle as Title } from './title/popover-title'
export { PopoverDescription as Description } from './description/popover-description'

export const Root = BasePopover.Root;
export const Trigger = BasePopover.Trigger;
export const Close = BasePopover.Close;
export const Portal = BasePopover.Portal;
