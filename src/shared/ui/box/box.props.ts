import type { PropDef, GetPropDefTypes } from '@/shared/lib/utilities-props';

const displayValues = ['none', 'inline', 'inline-block', 'block', 'contents'] as const;

const boxPropDefs = {
	/**
	 * Sets the CSS **display** property.
	 * Supports a subset of the corresponding CSS values and responsive objects.
	 *
	 * @example
	 * display="inline-block"
	 * display={{ sm: 'none', lg: 'block' }}
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

// Use all of the imported prop defs to ensure that JSDoc works
type BoxOwnProps = GetPropDefTypes<typeof boxPropDefs>;

export { boxPropDefs };
export type { BoxOwnProps };
