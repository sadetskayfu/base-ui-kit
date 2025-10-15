import * as React from 'react';
import { usePaginationRootContext } from '../root/pagination-root-context';
import { getPageNumbers } from '../helpers/get-page-numbers';
import { PaginationSpace } from '../space/pagination-space';

export function PaginationButtons(props: PaginationButtons.Props) {
	const { renderButton, renderSpace } = props;

	const {
		maxDisplayedPages,
		totalPages,
		page: currentPage,
		onPageChange,
	} = usePaginationRootContext();

	return getPageNumbers(currentPage, totalPages, maxDisplayedPages).map((page, index) => {
		if (typeof page === 'string') {
			return (
				<React.Fragment key={index}>
					{renderSpace ? renderSpace : <PaginationSpace />}
				</React.Fragment>
			);
		}

		const isCurrentPage = currentPage === page;

		return (
			<React.Fragment key={index}>
				{renderButton({
					onClick: () => (isCurrentPage ? undefined : onPageChange(page)),
					page,
					current: isCurrentPage,
					'aria-current': isCurrentPage ? 'true' : undefined,
					'aria-label': isCurrentPage
						? `Страница ${page}`
						: `Перейти на страницу ${page}`,
				})}
			</React.Fragment>
		);
	});
}

export namespace PaginationButtons {
	export interface RenderButtonProps {
		onClick: () => void;
		page: number;
		current: boolean;
		'aria-label': string;
		'aria-current': 'true' | undefined;
	}
	export interface Props {
		renderButton: (props: RenderButtonProps) => React.ReactElement;
		renderSpace?: React.ReactElement;
	}
}
