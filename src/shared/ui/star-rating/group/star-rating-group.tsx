import classNames from 'classnames';
import { Aria } from '../../aria';
import { Flex } from '../../flex';
import { useStarRatingRootContext } from '../root/star-rating-root-context';
import styles from './star-rating-group.module.scss';

export function StarRatingGroup(props: StarRatingGroup.Props) {
	const { children, className, ...otherProps } = props;

	const { setHoverValue, starCount, readOnly, disabled } = useStarRatingRootContext();

	return (
		<Aria.Control
			aria-disabled={disabled ? 'true' : undefined}
			aria-readonly={readOnly ? 'true' : undefined}
			render={
				<Flex
					role="radiogroup"
					onMouseLeave={() => {
						if (!('ontouchstart' in window)) {
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
