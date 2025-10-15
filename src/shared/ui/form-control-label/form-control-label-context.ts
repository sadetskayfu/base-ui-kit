import * as React from 'react';

export interface FormControlLabelContext {
	required: boolean;
	disabled: boolean;
	readOnly: boolean;
}

export const FormControlLabelContext = React.createContext<FormControlLabelContext | undefined>(
	undefined
);

export function useFormControlLabelContext() {
	return React.useContext(FormControlLabelContext);
}
