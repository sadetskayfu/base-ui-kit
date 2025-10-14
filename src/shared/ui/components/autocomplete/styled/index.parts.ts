import { BaseAutocomplete } from '../base';

export { AutocompleteBackdrop as Backdrop } from './backdrop/autocomplete-backdrop';
export { AutocompletePopup as Popup } from './popup/autocomplete-popup';
export { AutocompletePositioner as Positioner } from './positioner/autocomplete-positioner';
export { AutocompleteIcon as Icon } from './icon/autocomplete-icon';
export { AutocompleteItem as Item } from './item/autocomplete-item';
export { AutocompleteGroupLabel as GroupLabel } from './group-label/autocomplete-group-label';
export { AutocompleteStickyGroupLabel as StickyGroupLabel } from './sticky-group-label/autocomplete-sticky-group-label';
export { AutocompleteEmpty as Empty } from './empty/autocomplete-empty';

export const Root = BaseAutocomplete.Root;
export const Trigger = BaseAutocomplete.Trigger;
export const Group = BaseAutocomplete.Group;
export const Portal = BaseAutocomplete.Portal;
export const Value = BaseAutocomplete.Value;
export const List = BaseAutocomplete.List;
export const Collection = BaseAutocomplete.Collection;
export const Clear = BaseAutocomplete.Clear;
export const Row = BaseAutocomplete.Row;
export const Status = BaseAutocomplete.Status;
export const Input = BaseAutocomplete.Input;

export {
	ScrollArea,
	Separator,
	ItemContent,
} from '@/shared/ui/components/menu-components/index.parts';

export namespace Root {
	export interface Props<
		ItemValue,
	> extends BaseAutocomplete.Root.Props<ItemValue> {}
}
export namespace Input {
	export interface Props extends BaseAutocomplete.Input.Props {}
}
export namespace Trigger {
	export interface Props extends BaseAutocomplete.Trigger.Props {}
}
export namespace Clear {
	export interface Props extends BaseAutocomplete.Clear.Props {}
}
