import { Flex } from '@/shared/ui/flex';

export function DialogHeader(props: DialogHeader.Props) {
	return (
		<Flex
			align="center"
			border="bottom"
			gapX="4"
			py="4"
			px="4"
			mb="4"
			mt="-4"
			mx="-4"
			{...props}
		/>
	);
}

export namespace DialogHeader {
	export interface Props extends Flex.Props {}
}
