import { BaseDialog } from '../base/dialog';

export { DialogDescription as Description } from './description/dialog-description';
export { DialogTitle as Title } from './title/dialog-title';
export { DialogPopup as Popup } from './popup/dialog-popup';
export { DialogHeader as Header } from './header/dialog-header'
export { DialogHeaderClose as HeaderClose } from './header-close/dialog-header-close'

export const Root = BaseDialog.Root;
export const Trigger = BaseDialog.Trigger;
export const Close = BaseDialog.Close;

export namespace Root {
	export interface Props extends BaseDialog.Root.Props {}
}
