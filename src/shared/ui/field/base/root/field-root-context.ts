import * as React from 'react';
import { useContext } from '@/shared/hooks';

export interface FieldRootContext {
	inputId: string | undefined;
	setInputId: React.Dispatch<React.SetStateAction<string | undefined>>;
	helperTextIds: string[];
	setHelperTextIds: React.Dispatch<React.SetStateAction<string[]>>;
	focused: boolean;
	setFocused: React.Dispatch<React.SetStateAction<boolean>>;
    errored: boolean
	disabled: boolean;
	readOnly: boolean;
	required: boolean
	inputRef: React.RefObject<HTMLInputElement | null>;
}

export const FieldRootContext = React.createContext<FieldRootContext | undefined>(
	undefined
);

export function useFieldRootContext() {
	return useContext(
		FieldRootContext,
		'FieldRootContext is missing. Field parts must be used within <Field.Root>'
	);
}
