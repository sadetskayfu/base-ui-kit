import { Aria } from '@/shared/ui/components/aria';
import { Text } from '@/shared/ui/components/text';

export function SelectHelperText(props: Aria.Description.Props) {
	const { tag = 'p', ...otherProps } = props;

	return <Aria.Description render={<Text tag={tag} />} {...otherProps} />;
}
