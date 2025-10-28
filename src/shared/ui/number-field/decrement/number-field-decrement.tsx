import { Button } from '../../button';
import { Icon } from '../../icons';
import { BaseNumberField } from '../../base/number-field';

export function NumberFieldDecrement(props: BaseNumberField.Decrement.Props & Button.Props) {
	return (
		<BaseNumberField.Decrement aria-label='Уменьшить' render={<Button />} {...props}>
			<Icon.Minus />
		</BaseNumberField.Decrement>
	);
}
