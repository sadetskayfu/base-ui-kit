import * as React from 'react';
import { useContext } from '@/shared/hooks';

export interface StarRatingRootContext {
	name: string
	value: number
	setValue: (value: number) => void
	hoverValue: number | null
	setHoverValue: (value: number | null) => void
	precise?: boolean;
	starCount: number
    disabled?: boolean
    readOnly?: boolean
}

export const StarRatingRootContext = React.createContext<StarRatingRootContext | undefined>(
	undefined
);

export function useStarRatingRootContext() {
	return useContext(
		StarRatingRootContext,
		'StarRatingRootContext is missing. StarRating parts must be used within <StarRating.Root>'
	);
}
