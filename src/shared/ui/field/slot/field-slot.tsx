import classNames from 'classnames';
import { Flex } from '../../flex';

export function FieldSlot(props: FieldSlot.Props) {
	const { className, side, ...otherProps } = props;

	return (
		<Flex
			data-side={side}
			align="center"
			flexShrink="0"
			className={classNames('cursor-inherit', className)}
			{...otherProps}
		/>
	);
}

export namespace FieldSlot {
	export interface Props extends Flex.Props {
		side: 'left' | 'right';
	}
}
