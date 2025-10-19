import type { Responsive } from '../props/prop-def';

function mapResponsiveProp<Input extends string, Output>(
	propValue: Responsive<Input> | undefined,
	mapValue: (value: Input) => Output
): Responsive<Output> | undefined {
	if (propValue === undefined) return undefined;

	if (typeof propValue === 'string') {
		return mapValue(propValue);
	}
}

export { mapResponsiveProp };
