import * as React from 'react';
import { Button } from '../button';

export type ButtonContext = {
	size?: Button.Props['size'];
	radius?: Button.Props['radius'];
	variant?: Button.Props['variant'];
	color?: Button.Props['color'];
	iconButton?: boolean;
	animateBorder?: boolean
	disabled?: boolean;
	loading?: boolean;
	autoFs?: boolean
};

export const ButtonContext = React.createContext<ButtonContext | undefined>(undefined);

export function useButtonContext() {
	return React.useContext(ButtonContext);
}
