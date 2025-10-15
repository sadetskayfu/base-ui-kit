import { Flex } from '@/shared/ui/flex';
import { StarRating } from '@/shared/ui/star-rating';

function getReactionLabel(value: number | null) {
	if (value === 1) {
		return 'Очень грустно :(';
	}
	if (value === 2) {
		return 'Такое себе :(';
	}
	if (value === 3) {
		return 'Ну.. сойдет';
	}
	if (value === 4) {
		return 'Неплохо.. неплохо..';
	}
	if (value === 5) {
		return 'Отлично!!';
	}
	return undefined;
}

export function StarRatingSection() {
	return (
		<Flex direction="column" gap="3" align="center">
			<StarRating.Root name="star-rating">
				<Flex direction="column" gap="1" align="center">
					<StarRating.Label>
						<StarRating.Value>
							{value => `Ваша оценка: ${value}. ${getReactionLabel(value)}`}
						</StarRating.Value>
					</StarRating.Label>
					<StarRating.Group>
						{value => <StarRating.Item key={value} value={value} />}
					</StarRating.Group>
					<StarRating.HoverValue>
						{value => getReactionLabel(value)}
					</StarRating.HoverValue>
				</Flex>
			</StarRating.Root>
			<StarRating.Root name="precise-star-rating" precise>
				<Flex direction='column' gap='1'>
					<StarRating.Label>Precise</StarRating.Label>
					<StarRating.Group>
						{value => <StarRating.Item key={value} value={value} />}
					</StarRating.Group>
				</Flex>
			</StarRating.Root>
            <StarRating.Root name="10-star-rating" starCount={10}>
				<Flex direction='column' gap='1'>
					<StarRating.Label>10 Stars</StarRating.Label>
					<StarRating.Group>
						{value => <StarRating.Item key={value} value={value} />}
					</StarRating.Group>
				</Flex>
			</StarRating.Root>
		</Flex>
	);
}
