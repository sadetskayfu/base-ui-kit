import { Separator } from '../../separator';

export function ListSeparator(props: ListSeparator.Props) {
	const { orientation = 'horizontal', ...otherProps } = props;

	return (
		<Separator
			my={orientation === 'horizontal' ? '2' : '3'}
			mx={orientation === 'vertical' ? '2' : '3'}
			orientation={orientation}
			{...otherProps}
		/>
	);
}

export namespace ListSeparator {
	export interface Props extends Separator.Props {}
}
