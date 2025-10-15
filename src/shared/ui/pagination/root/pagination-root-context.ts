import * as React from 'react';
import { useContext } from '@/shared/hooks';

export interface PaginationRootContext {
	totalPages: number;
	maxDisplayedPages: number;
	loop: boolean;
	page: number;
	onPageChange: (page: number) => void;
}

export const PaginationRootContext = React.createContext<PaginationRootContext | undefined>(
	undefined
);

export function usePaginationRootContext() {
	return useContext(
		PaginationRootContext,
		'PaginationRootContext is missing. Pagination parts must be used within <Pagination.Root>.'
	);
}
