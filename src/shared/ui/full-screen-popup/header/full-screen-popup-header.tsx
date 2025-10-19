import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/text';
import { Aria } from '@/shared/ui/aria';
import { Flex } from '@/shared/ui/flex';
import styles from './full-screen-popup-header.module.scss';

export function FullScreenPopupHeader(props: FullScreenPopupHeader.Props) {
	const { title, titleTag, onClose, ...otherProps } = props;

	return (
		<Flex align="center" border="bottom" gapX="4" py="4" px="4" mt="-4" mx="-4" {...otherProps}>
			<Button
				className={styles['close-button']}
				radius="circular"
				color="secondary-soft"
				variant="clear"
				size="3"
				iconButton
				autoFs
				aria-label="Закрыть всплывающее окно"
				onClick={onClose}
			>
				<Icon.MoveLeft />
			</Button>
			<Aria.Label tag={titleTag} size="4" weight="medium">
				{title}
			</Aria.Label>
		</Flex>
	);
}

export namespace FullScreenPopupHeader {
	export interface Props extends Flex.Props {
		title: string;
		titleTag?: Text.Props['tag'];
		onClose: () => void;
	}
}
