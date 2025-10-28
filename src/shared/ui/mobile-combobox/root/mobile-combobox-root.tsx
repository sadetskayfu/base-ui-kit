import * as React from 'react';
import { BaseCombobox } from '../../base/combobox';
import { MobileComboboxRootContext } from './mobile-combobox-root-context';

export function ComboboxRoot<
	ItemValue,
	SelectedValue = ItemValue,
	Multiple extends boolean | undefined = false,
>(props: ComboboxRoot.Props<ItemValue, SelectedValue, Multiple>) {
	const {
		children,
		open: externalOpen,
		onOpenChange: externalSetOpen,
		defaultOpen = false,
		...otherProps
	} = props;

	const [internalOpen, internalSetOpen] = React.useState<boolean>(defaultOpen);

	const open = externalOpen ?? internalOpen;
	const setOpen = externalSetOpen ?? internalSetOpen;

	const contextValue: MobileComboboxRootContext = React.useMemo(() => ({ setOpen }), [setOpen]);

	return (
		<BaseCombobox.Root open={open} onOpenChange={setOpen} modal {...otherProps}>
			<MobileComboboxRootContext.Provider value={contextValue}>
				{children}
			</MobileComboboxRootContext.Provider>
		</BaseCombobox.Root>
	);
}

export namespace ComboboxRoot {
	export interface Props<
		ItemValue,
		SelectedValue = ItemValue,
		Multiple extends boolean | undefined = false,
	> extends BaseCombobox.Root.Props<ItemValue, SelectedValue, Multiple> {
		onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
	}
}
