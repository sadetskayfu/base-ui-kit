import classNames from 'classnames';
import { Aria } from '@/shared/ui/aria';
import { Flex } from '@/shared/ui/flex';
import styles from './full-screen-popup-root.module.scss';

export function FullScreenPopupRoot(props: FullScreenPopupRoot.Props) {
	const { children, className, p = '4', bgColor = 'grey-2', ...otherProps } = props;

	return (
		<Aria.Root>
			<Aria.Control
				className={classNames(styles['popup'], className)}
				render={<Flex p={p} bgColor={bgColor} direction="column" />}
				{...otherProps}
			>
				{children}
			</Aria.Control>
		</Aria.Root>
	);
}

export namespace FullScreenPopupRoot {
	export interface OwnProps extends Flex.OwnProps {}
	export interface Props extends Flex.Props {}
}
