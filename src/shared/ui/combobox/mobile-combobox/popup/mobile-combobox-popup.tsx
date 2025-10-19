import { RemoveScroll } from 'react-remove-scroll';
import { BaseCombobox } from '../../base';
import { FullScreenPopup } from '@/shared/ui/full-screen-popup';

export function MobileComboboxPopup(props: MobileComboboxPopup.Props) {
	const { children, portalTarget, ...otherProps } = props;

	return (
		<BaseCombobox.Portal container={portalTarget}>
			{/* eslint-disable-next-line */}
			<BaseCombobox.Positioner render={({ style, ...props }) => <div {...props} />}>
				<RemoveScroll>
					<BaseCombobox.Popup
						onFocus={event => event.preventBaseUIHandler()}
						render={<FullScreenPopup.Root />}
						{...otherProps}
					>
						{children}
					</BaseCombobox.Popup>
				</RemoveScroll>
			</BaseCombobox.Positioner>
		</BaseCombobox.Portal>
	);
}

export namespace MobileComboboxPopup {
	export interface Props
		extends Omit<BaseCombobox.Popup.Props, 'className'>,
			FullScreenPopup.Root.OwnProps {
		portalTarget?: BaseCombobox.Portal.Props['container'];
	}
}
