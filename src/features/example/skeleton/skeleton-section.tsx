import { Flex } from '@/shared/ui/flex';
import { RenderSkeletons, Skeleton } from '@/shared/ui/skeleton';

export function SkeletonSection() {
	return (
		<Flex gap="3" justify='center'>
			<RenderSkeletons count={5}>
				<Skeleton width="100px" height="50px" radius="3" />
			</RenderSkeletons>
		</Flex>
	);
}
