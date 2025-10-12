import { Avatar } from '@/shared/ui/components/avatar';
import { Flex } from '@/shared/ui/components/flex';
import { Text } from '@/shared/ui/components/text';

export function AvatarSection() {
	return (
		<section>
			<Text>Avatar</Text>
			<Flex direction="column" gap="3" mt="5">
				<Flex gap="2">
					<Avatar
						size="3"
						fallback="YI"
						radius="circular"
						color="accent"
						variant="solid"
					/>

					<Avatar
						size="3"
						fallback="YI"
						radius="circular"
						color="secondary"
						variant="solid"
					/>
				</Flex>
				<Flex gap="2">
					<Avatar size="3" fallback="YI" radius="circular" color="accent" />
					<Avatar size="3" fallback="YI" radius="circular" color="secondary" />
				</Flex>
                <Flex gap="2" align='center'>
					<Avatar size="5" fallback="YI" radius="circular" />
					<Avatar size="4" fallback="YI" radius="circular" />
                    <Avatar size="3" fallback="YI" radius="circular" />
                    <Avatar size="2" fallback="YI" radius="circular" />
                    <Avatar size="1" fallback="YI" radius="circular" />
				</Flex>
			</Flex>
		</section>
	);
}
