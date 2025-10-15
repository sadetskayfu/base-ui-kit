import * as React from 'react';
import { useRenderElement } from '@/shared/hooks';
import { usePaginationRootContext } from '../root/pagination-root-context';

export const PaginationBackButton = React.forwardRef(function PaginationBackButton(
	props: PaginationBackButton.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { render, disabled: disabledProp, ...otherProps } = props;

	const { loop, totalPages, page, onPageChange } = usePaginationRootContext();

	const disabled = disabledProp || (!loop && page === 1) || totalPages === 1;

	const element = useRenderElement('button', {
		render,
		ref: forwardedRef,
		props: [
			{
				onClick: () => onPageChange(page - 1),
				disabled,
				'aria-label': 'Предыдущая страница',
			},
			otherProps,
		],
	});

	return element;
});

export namespace PaginationBackButton {
	export interface State {}
	export interface Props extends useRenderElement.ModernComponentProps<'button', State> {}
}
