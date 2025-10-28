import * as React from 'react';
import { Field } from '../../field';
import { usePasswordFieldRootContext } from '../root/password-field-root-context';

export const PasswordFieldInput = React.forwardRef(function PasswordFieldInput(
	props: Field.Input.Props,
	forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
	const { visiblePassword } = usePasswordFieldRootContext();

	return (
		<Field.Input ref={forwardedRef} type={visiblePassword ? 'text' : 'password'} {...props} />
	);
});
