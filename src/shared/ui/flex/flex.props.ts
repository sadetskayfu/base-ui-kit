import { gapPropDefs, type PropDef, type GetPropDefTypes } from '@/shared/lib/utilities-props';

const displayValues = ['none', 'inline-flex', 'flex'] as const;
const directionValues = ['row', 'column', 'row-reverse', 'column-reverse'] as const;
const alignValues = ['start', 'center', 'end', 'baseline', 'stretch'] as const;
const justifyValues = ['start', 'center', 'end', 'between'] as const;
const wrapValues = ['nowrap', 'wrap', 'wrap-reverse'] as const;

export const flexPropDefs = {
	/**
	 * Sets the CSS **display** property.
	 * Supports a subset of the corresponding CSS values.
	 *
	 * @example
	 * display="inline-flex"
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
	/**
	 * Sets the CSS **flex-direction** property.
	 * Supports the corresponding CSS values.
	 *
	 * @example
	 * direction="column"
	 *
	 * @link
	 * https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
	 */
	direction: {
		type: 'enum',
		className: 'yar-fd',
		values: directionValues,
		responsive: true,
	},
	/**
	 * Sets the CSS **align-items** property.
	 * Supports the corresponding CSS values.
	 *
	 * @example
	 * align="center"
	 *
	 * @link
	 * https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
	 */
	align: {
		type: 'enum',
		className: 'yar-ai',
		values: alignValues,
		responsive: true,
	},
	/**
	 * Sets the CSS **justify-content** property.
	 * Supports a subset of the corresponding CSS values.
	 *
	 * @example
	 * justify="between"
	 *
	 * @link
	 * https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
	 */
	justify: {
		type: 'enum',
		className: 'yar-jc',
		values: justifyValues,
		parseValue: parseJustifyValue,
		responsive: true,
	},
	/**
	 * Sets the CSS **flex-wrap** property.
	 * Supports the corresponding CSS values.
	 *
	 * @example
	 * wrap="wrap"
	 *
	 * @link
	 * https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
	 */
	wrap: {
		type: 'enum',
		className: 'yar-fw',
		values: wrapValues,
		responsive: true,
	},
	...gapPropDefs,
} satisfies {
	display: PropDef<(typeof displayValues)[number]>;
	direction: PropDef<(typeof directionValues)[number]>;
	align: PropDef<(typeof alignValues)[number]>;
	justify: PropDef<(typeof justifyValues)[number]>;
	wrap: PropDef<(typeof wrapValues)[number]>;
};

function parseJustifyValue(value: string) {
	return value === 'between' ? 'space-between' : value;
}

export type FlexOwnProps = GetPropDefTypes<typeof flexPropDefs & typeof gapPropDefs>;

