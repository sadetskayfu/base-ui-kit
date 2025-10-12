import { Button } from '@/shared/ui/components/button';
import { Icon } from '@/shared/ui/components/icons';
import { BaseNumberField } from '@/shared/ui/components/base-number-field';

export function NumberFieldDecrement(props: BaseNumberField.Decrement.Props & Button.Props) {
	return (
		<BaseNumberField.Decrement render={<Button />} {...props}>
			<Icon.Minus />
		</BaseNumberField.Decrement>
	);
}
