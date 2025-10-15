import { Flex } from '@/shared/ui/flex';
import { BaseTabs } from '../../base';

export function TabsList(props: TabsList.Props) {
	return <BaseTabs.List render={<Flex position='relative' />} {...props} />;
}

export namespace TabsList {
	export interface Props extends Omit<BaseTabs.List.Props, 'className'>, Flex.OwnProps {
		className?: string;
	}
}
