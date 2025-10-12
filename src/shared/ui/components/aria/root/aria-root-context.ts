import * as React from 'react';
import { useContext } from '@/shared/hooks';

export interface AriaRootContext {
	labelId: string | undefined;
	setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
	helperTextIds: string[];
	setHelperTextIds: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AriaRootContext = React.createContext<AriaRootContext | undefined>(undefined);

export function useAriaRootContext() {
	return useContext(
		AriaRootContext,
		'AriaRootContext is missing. Aria parts must be used within <Aria.Root>',
		true
	);
}
