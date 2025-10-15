import * as React from 'react';
import { useContext } from '@/shared/hooks';

export interface ChipRootContext {
	disabled: boolean;
	onClose?: (event: Event) => void;
}

export const ChipRootContext = React.createContext<ChipRootContext | undefined>(undefined);

export function useChipRootContext() {
	return useContext(
		ChipRootContext,
		'ChipRootContext is missing. Chip parts must be used within <Chip.Root>',
		true
	);
}
