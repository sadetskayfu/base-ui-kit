import * as React from 'react';
import { FieldRootContext } from './field-root-context';

export function FieldRoot(props: FieldRoot.Props) {
	const {
		children,
		disabled = false,
		errored = false,
		readOnly = false,
		required = false,
	} = props;

	const [inputId, setInputId] = React.useState<string | undefined>(undefined);
	const [helperTextIds, setHelperTextIds] = React.useState<string[]>([]);
	const [focused, setFocused] = React.useState<boolean>(false);

	const inputRef = React.useRef<HTMLInputElement>(null);

	const contextValue: FieldRootContext = React.useMemo(
		() => ({
			disabled,
			errored,
			readOnly,
			required,
			focused,
			setFocused,
			helperTextIds,
			setHelperTextIds,
			inputId,
			setInputId,
			inputRef,
		}),
		[
			disabled,
			errored,
			readOnly,
			required,
			focused,
			setFocused,
			helperTextIds,
			setHelperTextIds,
			inputId,
			setInputId,
			inputRef,
		]
	);

	return <FieldRootContext.Provider value={contextValue}>{children}</FieldRootContext.Provider>;
}

export namespace FieldRoot {
	export interface Props {
		children?: React.ReactNode;
		disabled?: boolean;
		readOnly?: boolean;
		required?: boolean;
		errored?: boolean;
	}
}
