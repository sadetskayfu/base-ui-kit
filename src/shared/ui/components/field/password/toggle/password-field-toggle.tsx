import { Button } from '@/shared/ui/components/button';
import { Field } from '../../default';
import { usePasswordFieldRootContext } from '../root/password-field-root-context';
import { Icon } from '@/shared/ui/components/icons';

export function PasswordFieldToggle(props: Field.Action.Props & Button.Props) {
	const { visiblePassword, setVisiblePassword } = usePasswordFieldRootContext();

	return (
		<Field.Action
			onClick={() => setVisiblePassword(prev => !prev)}
			aria-label={visiblePassword ? 'Hidden password display' : 'Show password display'}
			render={<Button />}
			{...props}
		>
			{visiblePassword ? <Icon.Eye /> : <Icon.EyeOff />}
		</Field.Action>
	);
}
