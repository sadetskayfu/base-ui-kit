import * as React from 'react';
import { FieldContext } from './field-context';

export function FieldProvider(props: FieldProvider.Props) {
	const { children, radius, size, fullWidth } = props;

	const contextValue: FieldContext = React.useMemo(
		() => ({ radius, size, fullWidth }),
		[radius, size, fullWidth]
	);

	return <FieldContext.Provider value={contextValue}>{children}</FieldContext.Provider>;
}

export namespace FieldProvider {
	export interface Props extends FieldContext {
		children?: React.ReactNode;
	}
}
