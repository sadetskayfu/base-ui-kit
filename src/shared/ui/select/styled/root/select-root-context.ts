import * as React from 'react';
import { useContext } from '@/shared/hooks';

export interface SelectRootContext {
    disabled?: boolean
	required?: boolean;
    errored?: boolean;
	triggerRef: React.RefObject<HTMLDivElement | null>;
    focused: boolean
    setFocused: React.Dispatch<React.SetStateAction<boolean>>
}

export const SelectRootContext = React.createContext<SelectRootContext | undefined>(undefined);

export function useSelectRootContext() {
	return useContext(
		SelectRootContext,
		'SelectRootContext is missing. Select field parts must be used within <Select.Root>'
	);
}
