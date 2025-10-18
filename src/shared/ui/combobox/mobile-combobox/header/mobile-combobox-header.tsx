import { FullScreenPopup } from '@/shared/ui/full-screen-popup';
import { useMobileComboboxRootContext } from '../root/mobile-combobox-root-context';

export function MobileComboboxHeader(props: MobileComboboxHeader.Props) {
	const { setOpen } = useMobileComboboxRootContext();

	return <FullScreenPopup.Header onClose={() => setOpen(false)} {...props} />;
}

export namespace MobileComboboxHeader {
	export interface Props extends Omit<FullScreenPopup.Header.Props, 'onClose'> {}
}
