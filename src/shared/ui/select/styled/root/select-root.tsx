import * as React from 'react';
import { BaseSelect } from '../../base';
import { SelectRootContext } from './select-root-context';
import { Aria } from '@/shared/ui/aria';

export function SelectRoot<Value, Multiple extends boolean | undefined = false>(
	props: SelectRoot.Props<Value, Multiple>
) {
	const {
		children,
		required,
		errored,
		disabled,
		defaultOpen = false,
		open: externalOpen,
		onOpenChange: externalSetOpen,
		...otherProps
	} = props;

	const [internalOpen, internalSetOpen] = React.useState<boolean>(defaultOpen);

	const open = externalOpen ?? internalOpen;
	const setOpen = externalSetOpen ?? internalSetOpen;

	const [open2, setOpen2] = React.useState<boolean>(open);
	const [focused, setFocused] = React.useState<boolean>(false);

	const isFocused = open || open2 || focused;

	const triggerRef = React.useRef<HTMLDivElement>(null);

	const contextValue: SelectRootContext = React.useMemo(
		() => ({ triggerRef, required, errored, disabled, focused: isFocused, setFocused }),
		[required, errored, disabled, isFocused]
	);

	return (
		<BaseSelect.Root
			required={required}
			disabled={disabled}
			open={open}
			onOpenChange={setOpen}
			onOpenChangeComplete={setOpen2}
			{...otherProps}
		>
			<Aria.Root>
				<SelectRootContext.Provider value={contextValue}>
					{children}
				</SelectRootContext.Provider>
			</Aria.Root>
		</BaseSelect.Root>
	);
}

export namespace SelectRoot {
	export interface Props<Value, Multiple extends boolean | undefined = false>
		extends BaseSelect.Root.Props<Value, Multiple> {
		errored?: boolean;
	}
}
