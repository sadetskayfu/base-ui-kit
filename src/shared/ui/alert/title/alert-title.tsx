import { Aria } from '../../aria';

/**
 * Renders a `<Text>` component.
 */
export function AlertTitle(props: Aria.Label.Props) {
	const { weight = 'medium', ...otherProps } = props;

	return <Aria.Label weight={weight} {...otherProps} />;
}
