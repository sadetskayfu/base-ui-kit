import classNames from 'classnames';
import { Flex } from '@/shared/ui/components/flex';
import { Text } from '@/shared/ui/components/text';
import styles from './menu-item-content.module.scss';

export function MenuItemContent(props: MenuItemContent.Props) {
	const { label, description, icon, iconPadding } = props;

	return (
		<div className={classNames(styles['item-content'], { [styles['pl']]: iconPadding })}>
			{icon ? (
				<Flex align="center">
					<span className={styles['icon']}>{icon}</span> {label}
				</Flex>
			) : (
				label
			)}
			{description && (
				<Text data-desc tag="p" color="soft" size="2">
					{description}
				</Text>
			)}
		</div>
	);
}

export namespace MenuItemContent {
	export interface Props {
		label: string;
		description?: string;
		icon?: React.ReactNode;
		iconPadding?: boolean;
	}
}
