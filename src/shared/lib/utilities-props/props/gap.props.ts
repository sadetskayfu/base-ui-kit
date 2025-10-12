import type { GetPropDefTypes, PropDef } from './prop-def.js';

const gapValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

export const gapPropDefs = {
	/**
	 * Sets the CSS **gap** property.
	 * Supports space scale values and CSS strings.
	 *
	 * @example
	 * gap="4"
	 * gap="20px"
	 *
	 * @link
	 * https://developer.mozilla.org/en-US/docs/Web/CSS/gap
	 */
	gap: {
		type: 'enum | string',
		className: 'yar-gap',
		customProperties: ['--gap'],
		values: gapValues,
		responsive: true,
	},
	/**
	 * Sets the CSS **row-gap** property.
	 * Supports space scale values and CSS strings.
	 *
	 * @example
	 * gapX="4"
	 * gapX="20px"
	 *
	 * @link
	 * https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
	 */
	gapX: {
		type: 'enum | string',
		className: 'yar-cg',
		customProperties: ['--column-gap'],
		values: gapValues,
		responsive: true,
	},
	/**
	 * Sets the CSS **column-gap** property.
	 * Supports space scale values and CSS strings.
	 *
	 * @example
	 * gapY="4"
	 * gapY="20px"
	 *
	 * @link
	 * https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
	 */
	gapY: {
		type: 'enum | string',
		className: 'yar-rg',
		customProperties: ['--row-gap'],
		values: gapValues,
		responsive: true,
	},
} satisfies {
	gap: PropDef<(typeof gapValues)[number]>;
	gapX: PropDef<(typeof gapValues)[number]>;
	gapY: PropDef<(typeof gapValues)[number]>;
};

export type GapProps = GetPropDefTypes<typeof gapPropDefs>;
