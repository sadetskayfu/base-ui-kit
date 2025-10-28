import { Button } from '../../button';
import { Icon } from '../../icons';
import { BaseNumberField } from '../../base/number-field';

export function NumberFieldIncrement(props: BaseNumberField.Increment.Props & Button.Props) {
	return (
		<BaseNumberField.Increment aria-label='Увеличить' render={<Button />} {...props}>
			<Icon.Plus />
		</BaseNumberField.Increment>
	);
}
