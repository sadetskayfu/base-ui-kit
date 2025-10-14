import * as React from 'react';
import { Field } from '@/shared/ui/components/field';
import { Combobox } from '../../styled';
import { FieldComboboxRootContext } from './field-combobox-root-context';

export function FieldComboboxRoot<
	ItemValue,
	SelectedValue = ItemValue,
	Multiple extends boolean | undefined = false,
>(props: FieldComboboxRoot.Props<ItemValue, SelectedValue, Multiple>) {
	const { children, disabled, readOnly, required, errored, ...otherProps } = props;

	const inputContainerRef = React.useRef<HTMLDivElement>(null);

	const mods = { disabled, readOnly, required };

	const contextValue: FieldComboboxRootContext = React.useMemo(() => ({ inputContainerRef }), []);

	return (
		<Combobox.Root {...mods} {...otherProps}>
			<Field.Root errored={errored} {...mods}>
				<FieldComboboxRootContext.Provider value={contextValue}>
					{children}
				</FieldComboboxRootContext.Provider>
			</Field.Root>
		</Combobox.Root>
	);
}

export namespace FieldComboboxRoot {
	export interface Props<
		ItemValue,
		SelectedValue = ItemValue,
		Multiple extends boolean | undefined = false,
	> extends Combobox.Root.Props<ItemValue, SelectedValue, Multiple> {
		errored?: boolean;
	}
}
