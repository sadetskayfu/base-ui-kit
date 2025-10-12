import type { GetPropDefTypes, PropDef } from './prop-def.js';

const border = ['top', 'right', 'bottom', 'left', 'all'] as const;

export const borderPropDef = {
	border: {
		type: 'enum',
		values: border,
		default: undefined,
		className: 'yar-border',
	},
} satisfies {
	border: PropDef<(typeof border)[number]>;
};

export type BorderProp = GetPropDefTypes<typeof borderPropDef>;
