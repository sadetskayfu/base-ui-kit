import { Backdrop } from '@/shared/ui/components/backdrop';
import { BaseAutocomplete } from '../../base';

export function AutocompleteBackdrop(props: AutocompleteBackdrop.Props) {
	return <BaseAutocomplete.Backdrop render={<Backdrop />} {...props} />;
}

export namespace AutocompleteBackdrop {
	export interface Props extends Omit<BaseAutocomplete.Backdrop.Props, 'className'>, Backdrop.Props {}
}
