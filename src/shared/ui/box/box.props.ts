import type { PropDef, GetPropDefTypes } from '@/shared/lib/utilities-props';

const displayValues = ['none', 'inline', 'inline-block', 'block', 'contents'] as const;

export const boxPropDefs = {
	/**
	 * Sets the CSS **display** property.
	 * Supports a subset of the corresponding CSS values.
	 *
	 * @example
	 * display="inline-block"
	 *
	 * @link
	 * https://developer.mozilla.org/en-US/docs/Web/CSS/display
	 */
	display: {
		type: 'enum',
		className: 'yar-display',
		values: displayValues,
		responsive: true,
	},
} satisfies {
	display: PropDef<(typeof displayValues)[number]>;
};

export type BoxOwnProps = GetPropDefTypes<typeof boxPropDefs>;

