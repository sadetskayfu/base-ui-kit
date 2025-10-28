import * as React from 'react';
import { useContext } from '@/shared/hooks';

export interface PasswordFieldRootContext {
	visiblePassword: boolean;
	setVisiblePassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PasswordFieldRootContext = React.createContext<PasswordFieldRootContext | undefined>(
	undefined
);

export function usePasswordFieldRootContext() {
	return useContext(
		PasswordFieldRootContext,
		'PasswordFieldRootContext is missing. PasswordField parts must be used within <PasswordField.Root>'
	);
}
