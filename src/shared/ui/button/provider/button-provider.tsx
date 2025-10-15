import * as React from 'react';
import { ButtonContext } from './button-context';

export const ButtonProvider = (props: ButtonProvider.Props) => {
	const { children, color, size, radius, variant, disabled, loading, iconButton, animateBorder, autoFs, } = props;

	const contextValue: ButtonContext = React.useMemo(
		() => ({ color, size, variant, disabled, loading, iconButton, radius, animateBorder, autoFs }),
		[color, size, variant, disabled, loading, iconButton, radius, animateBorder, autoFs]
	);

	return <ButtonContext.Provider value={contextValue}>{children}</ButtonContext.Provider>;
};

export namespace ButtonProvider {
	export interface Props extends ButtonContext {
		children?: React.ReactNode;
	}
}
