import { Button } from '../../button';
import { Field } from '../../field';
import { Icon } from '../../icons';
import { usePasswordFieldRootContext } from '../root/password-field-root-context';

export function PasswordFieldToggle(props: Field.Action.Props & Button.Props) {
	const { visiblePassword, setVisiblePassword } = usePasswordFieldRootContext();

	return (
		<Field.Action
			onClick={() => setVisiblePassword(prev => !prev)}
			aria-label={
				visiblePassword ? 'Отключить отображение пароля' : 'Включить отображение пароля'
			}
			render={<Button />}
			{...props}
		>
			{visiblePassword ? <Icon.Eye /> : <Icon.EyeOff />}
		</Field.Action>
	);
}
