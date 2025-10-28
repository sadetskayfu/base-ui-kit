import classNames from 'classnames';
import { Button } from '../../button';
import { Icon } from '../../icons';
import { BaseChip } from '../../base/chip';
import { useChipContext } from '../provider/chip-context';
import styles from './chip-close.module.scss';

export function ChipClose(props: ChipClose.Props) {
	const { className, ...otherProps } = props;

	const { color } = useChipContext(true);

	return (
		<BaseChip.Close
			className={classNames(styles['close'], className)}
			render={<Button color={color} iconButton variant="outlined" />}
			{...otherProps}
		>
			<Icon.X />
		</BaseChip.Close>
	);
}

export namespace ChipClose {
	export interface Props extends BaseChip.Close.Props {}
}
