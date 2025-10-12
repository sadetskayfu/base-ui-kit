import classNames from 'classnames';
import { Button } from '@/shared/ui/components/button';
import { Icon } from '@/shared/ui/components/icons';
import { BaseChip } from '../../base';
import { useChipContext } from '../provider/chip-context';
import styles from './chip-close.module.scss';

export function ChipClose(props: ChipClose.Props) {
	const { className, ...otherProps } = props;

	const { color } = useChipContext(true);

	return (
		<BaseChip.Close
			className={classNames(styles['close'], className)}
			render={<Button color={color} iconButton variant="ghost" />}
			{...otherProps}
		>
			<Icon.X />
		</BaseChip.Close>
	);
}

export namespace ChipClose {
	export interface Props extends BaseChip.Close.Props {}
}
