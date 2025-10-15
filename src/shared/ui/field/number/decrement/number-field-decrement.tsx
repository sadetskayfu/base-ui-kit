import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
import { BaseNumberField } from '@/shared/ui/base-number-field';

export function NumberFieldDecrement(props: BaseNumberField.Decrement.Props & Button.Props) {
	return (
		<BaseNumberField.Decrement render={<Button />} {...props}>
			<Icon.Minus />
		</BaseNumberField.Decrement>
	);
}
