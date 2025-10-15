import { Avatar } from '@/shared/ui/avatar';
import { Flex } from '@/shared/ui/flex';

export function AvatarSection() {
	return (
		<Flex direction='column' gap='3' align='center'>
			<Flex gap="3">
				<Avatar size="3" radius="circular" variant="solid" color="accent" fallback="Y" />
				<Avatar size="3" radius="circular" variant="ghost" color="accent" fallback="Y" />
				<Avatar size="3" radius="circular" variant="solid" color="secondary" fallback="Y" />
				<Avatar size="3" radius="circular" variant="ghost" color="secondary" fallback="Y" />
			</Flex>
			<Flex gap="3">
				<Avatar size="3" radius="circular" variant="solid" color="accent" fallback="YI" />
				<Avatar size="3" radius="circular" variant="ghost" color="accent" fallback="YI" />
				<Avatar
					size="3"
					radius="circular"
					variant="solid"
					color="secondary"
					fallback="YI"
				/>
				<Avatar
					size="3"
					radius="circular"
					variant="ghost"
					color="secondary"
					fallback="YI"
				/>
			</Flex>
		</Flex>
	);
}
