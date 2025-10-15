import * as React from 'react';
import { PaginationRootContext } from './pagination-root-context';
import { useEventCallback } from '@/shared/hooks';
import { Flex } from '@/shared/ui/flex';

export const PaginationRoot = React.forwardRef(function PaginationRoot(
	props: PaginationRoot.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		children,
		tag = 'nav',
		loop = false,
		totalItems,
		totalItemsOnPage,
		maxDisplayedPages = 5,
		page,
		onPageChange,
		...otherProps
	} = props;

	const totalPages = React.useMemo(
		() => Math.ceil(totalItems / totalItemsOnPage),
		[totalItems, totalItemsOnPage]
	);

	const handlePageChange = useEventCallback((page: number) => {
		if (loop) {
			if (page > totalPages) {
				onPageChange(1);
			} else if (page < 1) {
				onPageChange(totalPages);
			} else {
				onPageChange(page);
			}
		} else {
			if (page > 0 && page !== totalPages + 1) {
				onPageChange(page);
			}
		}
	});

	React.useEffect(() => {
		if (totalPages > 0 && totalPages < page) {
			onPageChange(totalPages);
		}
		// eslint-disable-next-line
	}, [totalPages]);

	const contextValue: PaginationRootContext = React.useMemo(
		() => ({ page, maxDisplayedPages, totalPages, loop, onPageChange: handlePageChange }),
		[page, maxDisplayedPages, totalPages, loop, handlePageChange]
	);

	return (
		<Flex tag={tag} ref={forwardedRef} {...otherProps}>
			<PaginationRootContext.Provider value={contextValue}>
				{children}
			</PaginationRootContext.Provider>
		</Flex>
	);
});

export namespace PaginationRoot {
	export interface State {}
	export interface Props extends Flex.Props {
		/**
		 * @default false
		 */
		loop?: boolean;
		totalItems: number;
		totalItemsOnPage: number;
		/**
		 * Min value 5
		 * @default 5
		 */
		maxDisplayedPages?: number;
		page: number;
		onPageChange: (page: number) => void;
	}
}
