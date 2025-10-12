import { Aria } from '@/shared/ui/components/aria';

/**
 * Renders a `<Text>` component with prop `tag` = `span` and prop `weight` = `medium`.
 */
export function AlertTitle(props: Aria.Label.Props) {
	const { weight = 'medium', tag = 'span', ...otherProps } = props;

	return <Aria.Label weight={weight} tag={tag} {...otherProps} />;
}
