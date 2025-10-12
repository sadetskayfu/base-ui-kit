import { Button } from '@/shared/ui/components/button';
import { Icon } from '@/shared/ui/components/icons';
import { BaseNumberField } from '@/shared/ui/components/base-number-field';

export function NumberFieldIncrement(props: BaseNumberField.Increment.Props & Button.Props) {
	return (
		<BaseNumberField.Increment render={<Button />} {...props}>
			<Icon.Plus />
		</BaseNumberField.Increment>
	);
}
