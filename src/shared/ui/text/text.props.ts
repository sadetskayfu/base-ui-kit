import {
	textAlignPropDef,
	textWrapPropDef,
	weightPropDef,
	truncatePropDef,
	colorPropDef,
	type GetPropDefTypes,
} from '@/shared/lib/utilities-props';

export const textPropDefs = {
	...colorPropDef,
	...weightPropDef,
	...textAlignPropDef,
	...truncatePropDef,
	...textWrapPropDef,
};

export type TextOwnProps = GetPropDefTypes<typeof textPropDefs>;
