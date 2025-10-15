import { NumberField } from '@base-ui-components/react';

export { NumberFieldScrubArea as ScrubArea } from './scrub-area/number-field-scrub-area';

export const Root = NumberField.Root;
export const Decrement = NumberField.Decrement;
export const Increment = NumberField.Increment;
export const Input = NumberField.Input;
export const Group = NumberField.Group;

export namespace Root {
	export type Props = NumberField.Root.Props;
}
export namespace Input {
	export type Props = NumberField.Input.Props;
}
export namespace Increment {
	export type Props = NumberField.Increment.Props;
}
export namespace Decrement {
	export type Props = NumberField.Decrement.Props;
}
export namespace Group {
	export type Props = NumberField.Group.Props;
}
