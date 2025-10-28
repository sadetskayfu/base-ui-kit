import * as React from 'react';
import { Aria } from '../aria';
import { Flex } from '../flex';
import { FormGroupContext } from './form-group-context';

export function FormGroupRoot(props: FormGroupRoot.Props) {
	const {
		children,
		disabled = false,
		readOnly = false,
		direction = 'column',
		align = 'start',
		...otherProps
	} = props;

	const contextValue: FormGroupContext = React.useMemo(
		() => ({ disabled, readOnly }),
		[disabled, readOnly]
	);

	return (
		<Aria.Root>
			<Aria.Control
				aria-readonly={readOnly ? 'true' : undefined}
				aria-disabled={disabled ? 'true' : undefined}
				render={<Flex direction={direction} align={align} />}
				{...otherProps}
			>
				<FormGroupContext.Provider value={contextValue}>
					{children}
				</FormGroupContext.Provider>
			</Aria.Control>
		</Aria.Root>
	);
}

export namespace FormGroupRoot {
	export interface Props extends Flex.Props {
		disabled?: boolean;
		readOnly?: boolean;
	}
}
