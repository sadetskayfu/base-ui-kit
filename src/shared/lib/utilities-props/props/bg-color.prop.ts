import type { GetPropDefTypes, PropDef } from './prop-def';

const bgColor = ['grey-1', 'grey-2', 'grey-3'] as const;

export const bgColorPropDef = {
	bgColor: {
		type: 'enum',
		values: bgColor,
		default: undefined,
		className: 'yar-bg-color',
	},
} satisfies {
	bgColor: PropDef<(typeof bgColor)[number]>;
};

export type BgColorProp = GetPropDefTypes<typeof bgColorPropDef>;
