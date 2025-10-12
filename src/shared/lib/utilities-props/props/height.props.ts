import type { PropDef, GetPropDefTypes } from './prop-def.js';

const heightPropDefs = {
	/**
	 * Sets the CSS **height** property.
	 * Supports CSS strings.
	 *
	 * @example
	 * height="100px"
	 *
	 * @link
	 * https://developer.mozilla.org/en-US/docs/Web/CSS/height
	 */
	height: {
		type: 'string',
		className: 'yar-h',
		customProperties: ['--height'],
	},
	/**
	 * Sets the CSS **min-height** property.
	 * Supports CSS strings.
	 *
	 * @example
	 * minHeight="100px"
	 *
	 * @link
	 * https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
	 */
	minHeight: {
		type: 'string',
		className: 'yar-min-h',
		customProperties: ['--min-height'],
	},
	/**
	 * Sets the CSS **max-height** property.
	 * Supports CSS strings.
	 *
	 * @example
	 * maxHeight="100px"
	 *
	 * @link
	 * https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
	 */
	maxHeight: {
		type: 'string',
		className: 'yar-max-h',
		customProperties: ['--max-height'],
	},
} satisfies {
	height: PropDef<string>;
	minHeight: PropDef<string>;
	maxHeight: PropDef<string>;
};

type HeightProps = GetPropDefTypes<typeof heightPropDefs>;

export { heightPropDefs };
export type { HeightProps };
