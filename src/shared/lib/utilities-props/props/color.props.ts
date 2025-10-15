import type { GetPropDefTypes, PropDef } from './prop-def';

const color = ['soft', 'hard', 'accent-hard', 'accent-soft', 'error-hard', 'error-soft'] as const;

export const colorPropDef = {
	color: {
		type: 'enum',
		values: color,
		default: undefined,
		className: 'yar-color',
	},
} satisfies {
	color: PropDef<(typeof color)[number]>;
};

export type ColorProp = GetPropDefTypes<typeof colorPropDef>;
