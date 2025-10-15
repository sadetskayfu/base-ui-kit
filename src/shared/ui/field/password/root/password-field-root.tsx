import * as React from 'react';
import { Field } from '../../default';
import { PasswordFieldRootContext } from './password-field-root-context';

export function PasswordFieldRoot(props: PasswordFieldRoot.Props) {
	const { children, ...otherProps } = props;

	const [visiblePassword, setVisiblePassword] = React.useState<boolean>(false);

	const contextValue: PasswordFieldRootContext = React.useMemo(
		() => ({ visiblePassword, setVisiblePassword }),
		[visiblePassword]
	);

	return (
		<Field.Root {...otherProps}>
			<PasswordFieldRootContext.Provider value={contextValue}>
				{children}
			</PasswordFieldRootContext.Provider>
		</Field.Root>
	);
}

export namespace PasswordFieldRoot {
	export type Props = Field.Root.Props;
}
