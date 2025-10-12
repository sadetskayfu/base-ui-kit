import { BaseTooltip } from '../base';

export { TooltipArrow as Arrow } from './arrow/tooltip-arrow';
export { TooltipPopup as Popup } from './popup/tooltip-popup';
export { TooltipPositioner as Positioner } from './positioner/tooltip-positioner';

export const Root = BaseTooltip.Root;
export const Trigger = BaseTooltip.Trigger;
export const Portal = BaseTooltip.Portal;
export const Provider = BaseTooltip.Provider

export namespace Root {
    export interface Props extends BaseTooltip.Root.Props {}
}
