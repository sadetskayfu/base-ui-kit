import classNames from 'classnames';
import { useButtonContext } from '@/shared/ui/button';
import styles from './pagination-space.module.scss';

export function PaginationSpace() {
	const buttonProvider = useButtonContext();

	return (
		<span
			className={classNames(
				styles['space'],
				buttonProvider?.size && styles[`size-${buttonProvider.size}`]
			)}
            aria-hidden='true'
		>
			...
		</span>
	);
}
