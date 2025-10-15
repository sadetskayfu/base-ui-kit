import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
import { BaseNumberField } from '@/shared/ui/base-number-field';

export function NumberFieldIncrement(props: BaseNumberField.Increment.Props & Button.Props) {
	return (
		<BaseNumberField.Increment render={<Button />} {...props}>
			<Icon.Plus />
		</BaseNumberField.Increment>
	);
}
