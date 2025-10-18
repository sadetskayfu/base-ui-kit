import * as React from 'react';
import { useContext } from '@/shared/hooks';

export interface MobileComboboxRootContext {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileComboboxRootContext = React.createContext<MobileComboboxRootContext | undefined>(
	undefined
);

export function useMobileComboboxRootContext() {
	return useContext(
		MobileComboboxRootContext,
		'MobileComboboxRootContext is missing. MobileCombobox parts must be used within <MobileCombobox.Root>'
	);
}
