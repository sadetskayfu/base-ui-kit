import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/text';
import { Aria } from '@/shared/ui/aria';
import styles from './full-screen-popup-header.module.scss';

export function FullScreenPopupHeader(props: FullScreenPopupHeader.Props) {
	const { title, titleTag, onClose } = props;

	return (
		<div className={styles['header']}>
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
		</div>
	);
}

export namespace FullScreenPopupHeader {
	export interface Props {
		title: string;
		titleTag?: Text.Props['tag'];
		onClose: () => void;
	}
}
