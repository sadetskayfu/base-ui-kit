import { Flex } from '@/shared/ui/flex';

export function DialogHeader(props: DialogHeader.Props) {
	const { children, ...otherProps } = props;

	return (
		<Flex
			gap="3"
			mt="-5"
			mb="4"
			py="4"
			gapX='4'
			border='bottom'
			justify="between"
			align="center"
			bgColor="grey-2"
			{...otherProps}
		>
			{children}
		</Flex>
	);
}

export namespace DialogHeader {
	export interface Props extends Flex.Props {}
}
