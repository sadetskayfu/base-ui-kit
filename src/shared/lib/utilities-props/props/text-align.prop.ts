import type { PropDef } from './prop-def.js';

const textAlignValues = ['left', 'center', 'right'] as const;

const textAlignPropDef = {
	align: {
		type: 'enum',
		className: 'yar-ta',
		values: textAlignValues,
		responsive: true,
	},
} satisfies {
	align: PropDef<(typeof textAlignValues)[number]>;
};

export { textAlignPropDef };
