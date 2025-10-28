import * as React from 'react';
import { StarRatingRootContext } from './star-rating-root-context';
import { Aria } from '../../aria';

export function StarRatingRoot(props: StarRatingRoot.Props) {
	const {
		children,
		defaultValue = 1,
		name,
		disabled,
		readOnly,
		precise,
        starCount = 5,
		value: externalValue,
		onValueChange: externalSetValue,
		hoverValue: externalHoverValue,
		onHoverValueChange: externalSetHoverValue,
	} = props;

	const [internalValue, internalSetValue] = React.useState<number>(defaultValue);
	const [internalHoverValue, internalSetHoverValue] = React.useState<number | null>(null);

	const value = externalValue ?? internalValue;
	const setValue = externalSetValue ?? internalSetValue;
	const hoverValue = externalHoverValue ?? internalHoverValue;
	const setHoverValue = externalSetHoverValue ?? internalSetHoverValue;

	const contextValue: StarRatingRootContext = React.useMemo(
		() => ({
			value,
			setValue,
			hoverValue,
			setHoverValue,
			name,
			disabled,
			readOnly,
			precise,
            starCount,
		}),
		[value, hoverValue, name, disabled, readOnly, precise, starCount, setHoverValue, setValue]
	);

	return (
		<Aria.Root>
			<StarRatingRootContext value={contextValue}>{children}</StarRatingRootContext>
		</Aria.Root>
	);
}

export namespace StarRatingRoot {
	export interface Props {
        children?: React.ReactNode
		defaultValue?: number;
		name: string;
		disabled?: boolean;
		readOnly?: boolean;
		precise?: boolean;
        starCount?: number
		value?: number;
		onValueChange?: (value: number) => void;
		hoverValue?: number | null;
		onHoverValueChange?: (value: number | null) => void;
	}
}
