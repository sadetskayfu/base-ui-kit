import { BasePopover } from '../base/popover';

export { PopoverPopup as Popup } from './popup/popover-popup';
export { PopoverTitle as Title } from './title/popover-title'
export { PopoverDescription as Description } from './description/popover-description'

export const Root = BasePopover.Root;
export const Trigger = BasePopover.Trigger;
export const Close = BasePopover.Close;

export namespace Root {
    export interface Props extends BasePopover.Root.Props {}
}
