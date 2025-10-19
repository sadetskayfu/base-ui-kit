import { Separator } from '@/shared/ui/separator';

export function MenuSeparator(props: MenuSeparator.Props) {
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

export namespace MenuSeparator {
	export interface Props extends Separator.Props {}
}
