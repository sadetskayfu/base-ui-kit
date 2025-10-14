import { Flex } from '@/shared/ui/components/flex';
import styles from './dialog-header.module.scss';

export function DialogHeader(props: DialogHeader.Props) {
	const { children, ...otherProps } = props;

	return (
		<Flex
			gap="3"
			mt="-5"
			mb="4"
			py="4"
			border='bottom'
			justify="between"
			align="center"
			bgColor="grey-2"
			className={styles['header']}
			{...otherProps}
		>
			{children}
		</Flex>
	);
}

export namespace DialogHeader {
	export interface Props extends Flex.Props {}
}
