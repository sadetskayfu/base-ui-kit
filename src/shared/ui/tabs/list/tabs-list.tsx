import { Flex } from '../../flex';
import { BaseTabs } from '../../base/tabs';

export function TabsList(props: TabsList.Props) {
	const { position = 'relative', ...otherProps } = props;

	return <BaseTabs.List render={<Flex position={position} />} {...otherProps} />;
}

export namespace TabsList {
	export interface Props extends Omit<BaseTabs.List.Props, 'className'>, Flex.OwnProps {
		className?: string;
	}
}
