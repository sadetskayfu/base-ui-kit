import { useStarRatingRootContext } from '../root/star-rating-root-context';

export function StarRatingHoverValue({ children }: StarRatingHoverValue.Props) {
	const { hoverValue } = useStarRatingRootContext();

	return children(hoverValue);
}

export namespace StarRatingHoverValue {
	export interface Props {
		children: (hoverValue: number | null) => React.ReactNode;
	}
}
