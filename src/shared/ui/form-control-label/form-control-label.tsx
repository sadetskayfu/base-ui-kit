import * as React from 'react';
import { Flex } from '@/shared/ui/flex';
import { FormControlLabelContext } from './form-control-label-context';
import { useFormGroupContext } from '@/shared/ui/form-group';
import classNames from 'classnames';

/**
 * Renders `<Flex>` component.
 */
export function FormControlLabel(props: FormControlLabel.Props) {
	const {
		children,
		className,
		disabled: disabledProp,
		readOnly: readOnlyProp,
		required = false,
		tag = 'label',
		gapX = '2',
		align = 'center',
		...otherProps
	} = props;

	const formGroupContext = useFormGroupContext();

	const disabled = disabledProp || formGroupContext?.disabled || false;
	const readOnly = readOnlyProp || formGroupContext?.readOnly || false;

	const contextValue: FormControlLabelContext = React.useMemo(
		() => ({ disabled, readOnly, required }),
		[disabled, readOnly, required]
	);

	return (
		<Flex
			tag={tag}
			gapX={gapX}
			align={align}
			className={classNames({ ['disabled-cursor']: disabled }, className)}
			{...otherProps}
		>
			<FormControlLabelContext.Provider value={contextValue}>
				{children}
			</FormControlLabelContext.Provider>
		</Flex>
	);
}

export namespace FormControlLabel {
	export interface Props extends Flex.Props {
		readOnly?: boolean;
		disabled?: boolean;
		required?: boolean;
	}
}
