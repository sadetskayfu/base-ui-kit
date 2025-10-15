import { Separator } from '@/shared/ui/separator';
import styles from './menu-separator.module.scss';

export function MenuSeparator(props: MenuSeparator.Props) {
	const { orientation = 'horizontal', ...otherProps } = props;

	return (
		<Separator
			className={styles['separator']}
			my={orientation === 'horizontal' ? '2' : undefined}
			mx={orientation === 'vertical' ? '2' : undefined}
			orientation={orientation}
			{...otherProps}
		/>
	);
}

export namespace MenuSeparator {
	export interface Props extends Separator.Props {}
}
