import type { GetPropDefTypes, PropDef } from './prop-def';

const radius = ['none', '1', '2', '3', '4', '5', 'full', 'circular'] as const;

export const radiusPropDef = {
	radius: {
		type: 'enum',
		values: radius,
		default: undefined,
		className: 'yar-radius'
	},
} satisfies {
	radius: PropDef<(typeof radius)[number]>;
};

export type RadiusProp = GetPropDefTypes<typeof radiusPropDef>;
