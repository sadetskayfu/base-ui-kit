import {
	leadingTrimPropDef,
	textAlignPropDef,
	textWrapPropDef,
	weightPropDef,
	truncatePropDef,
	colorPropDef,
	type PropDef,
	type GetPropDefTypes,
} from '@/shared/lib/utilities-props';

const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

export const textPropDefs = {
	size: {
		type: 'enum',
		className: 'yar-size',
		values: sizes,
        responsive: true,
	},
    ...colorPropDef,
	...weightPropDef,
	...textAlignPropDef,
	...leadingTrimPropDef,
	...truncatePropDef,
	...textWrapPropDef,
} satisfies {
	size: PropDef<(typeof sizes)[number]>;
};

export type TextOwnProps = GetPropDefTypes<typeof textPropDefs>;
