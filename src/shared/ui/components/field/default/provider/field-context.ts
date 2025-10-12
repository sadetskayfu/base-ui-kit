import * as React from 'react';
import { FieldInputContainer } from '../input-container/field-input-container';

export interface FieldContext {
	size?: FieldInputContainer.Props['size'];
	radius?: FieldInputContainer.Props['radius'];
	fullWidth?: boolean;
}

export const FieldContext = React.createContext<FieldContext | undefined>(undefined);

export function useFieldContext() {
	return React.useContext(FieldContext);
}
