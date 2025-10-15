import * as React from 'react';
import { Aria } from '@/shared/ui/aria';
import { FormGroupContext } from './form-group-context';

export function FormGroupRoot(props: FormGroupRoot.Props) {
	const { children, disabled = false, readOnly = false, ...otherProps } = props;

	const contextValue: FormGroupContext = React.useMemo(
		() => ({ disabled, readOnly }),
		[disabled, readOnly]
	);

	return (
		<Aria.Root>
			<Aria.Control {...otherProps}>
				<FormGroupContext.Provider value={contextValue}>
					{children}
				</FormGroupContext.Provider>
			</Aria.Control>
		</Aria.Root>
	);
}

export namespace FormGroupRoot {
	export interface Props extends Aria.Control.Props {
		disabled?: boolean;
		readOnly?: boolean;
	}
}
