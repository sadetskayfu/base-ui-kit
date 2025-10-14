import classNames from 'classnames';
import { Avatar } from '@/shared/ui/components/avatar';
import { useChipContext } from '../provider/chip-context';
import styles from './chip-avatar.module.scss';

export function ChipAvatar(props: ChipAvatar.Props) {
	const { className, ...otherProps } = props;

	const { color } = useChipContext(true);

	return (
		<Avatar
			color={color}
			variant="ghost"
			className={classNames(styles['avatar'], className)}
			{...otherProps}
		/>
	);
}

export namespace ChipAvatar {
	export interface Props extends Avatar.Props {}
}
