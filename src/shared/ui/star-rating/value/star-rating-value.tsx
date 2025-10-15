import { useStarRatingRootContext } from '../root/star-rating-root-context';

export function StarRatingValue({ children }: StarRatingValue.Props) {
	const { value } = useStarRatingRootContext();

	return children(value);
}

export namespace StarRatingValue {
	export interface Props {
		children: (value: number) => React.ReactNode;
	}
}
