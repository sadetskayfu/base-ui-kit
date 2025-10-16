import classNames from 'classnames';
import { Aria } from '@/shared/ui/aria';
import { Flex } from '@/shared/ui/flex';
import { useStarRatingRootContext } from '../root/star-rating-root-context';
import styles from './star-rating-group.module.scss';

export function StarRatingGroup(props: StarRatingGroup.Props) {
	const { children, className, ...otherProps } = props;

	const { setHoverValue, starCount } = useStarRatingRootContext();

	return (
		<Aria.Control
			render={
				<Flex
					role="radiogroup"
					onMouseLeave={() => {
						if (window.matchMedia('(pointer: fine)').matches) {
							setHoverValue(null);
						}
					}}
					className={classNames(styles['group'], className)}
					{...otherProps}
				/>
			}
		>
			{Array.from({ length: starCount }, (_, index) => children(index + 1))}
		</Aria.Control>
	);
}

export namespace StarRatingGroup {
	export interface Props extends Omit<Flex.Props, 'children'> {
		children: (value: number) => React.ReactElement;
	}
}
