import { BaseAutocomplete } from '../../base';
import { Popup } from '@/shared/ui/popup';

export function AutocompletePopup(props: AutocompletePopup.Props) {
	const { bgColor = 'grey-2', p = '1', radius = '3', ...otherProps } = props;

	return (
		<BaseAutocomplete.Popup
			render={<Popup bgColor={bgColor} p={p} radius={radius} />}
			{...otherProps}
		/>
	);
}

export namespace AutocompletePopup {
	export interface Props extends Omit<BaseAutocomplete.Popup.Props, 'className'>, Popup.Props {}
}
