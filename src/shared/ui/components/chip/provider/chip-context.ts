import * as React from 'react';
import { ChipRoot } from '../root/chip-root';
import { useContext } from '@/shared/hooks';

export interface ChipContext {
	color?: ChipRoot.Color;
	radius?: ChipRoot.Radius;
	size?: ChipRoot.Size;
	variant?: ChipRoot.Variant;
}

export const ChipContext = React.createContext<ChipContext | undefined>(undefined);

export function useChipContext<R extends boolean>(required?: R) {
	return useContext(ChipContext, 'Chip parts must be used within <Chip.Root>', required);
}
