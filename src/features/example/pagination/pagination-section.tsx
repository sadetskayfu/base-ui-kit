import * as React from 'react';
import { Button, ButtonProvider } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
import { Pagination } from '@/shared/ui/pagination';
import { Flex } from '@/shared/ui/flex';

export function PaginationSection() {
	const [page, setPage] = React.useState<number>(1);

	return (
		<Flex justify="center">
			<Pagination.Root
				page={page}
				onPageChange={setPage}
				totalItems={100}
				totalItemsOnPage={10}
				maxDisplayedPages={5}
				gapX="1"
			>
				<ButtonProvider radius="2" size='3' iconButton>
					<Pagination.BackButton
						render={<Button color="accent" variant="clear" autoFontSize />}
					>
						<Icon.ChevronLeft />
					</Pagination.BackButton>
					<Pagination.Buttons
						renderButton={({ page, current, ...otherProps }) => (
							<Button
								color={current ? 'accent' : 'secondary'}
								variant={current ? 'filled' : 'ghost'}
								{...otherProps}
							>
								{page}
							</Button>
						)}
					/>
					<Pagination.ForwardButton
						render={<Button color="accent" variant="clear" autoFontSize />}
					>
						<Icon.ChevronRight />
					</Pagination.ForwardButton>
				</ButtonProvider>
			</Pagination.Root>
		</Flex>
	);
}
