import classNames from 'classnames';

import { getResponsiveStyles } from './get-responsive-styles';
import { mergeStyles } from './merge-styles';
import { marginPropDefs, type MarginProps } from '../props';

const marginValues = marginPropDefs.m.values;

export function getMarginStyles(props: MarginProps) {
	const [mClassNames, mCustomProperties] = getResponsiveStyles({
		className: 'yar-m',
		customProperties: ['--margin'],
		propValues: marginValues,
		value: props.m,
	});

	const [mxClassNames, mxCustomProperties] = getResponsiveStyles({
		className: 'yar-mx',
		customProperties: ['--margin-left', '--margin-right'],
		propValues: marginValues,
		value: props.mx,
	});

	const [myClassNames, myCustomProperties] = getResponsiveStyles({
		className: 'yar-my',
		customProperties: ['--margin-top', '--margin-bottom'],
		propValues: marginValues,
		value: props.my,
	});

	const [mtClassNames, mtCustomProperties] = getResponsiveStyles({
		className: 'yar-mt',
		customProperties: ['--margin-top'],
		propValues: marginValues,
		value: props.mt,
	});

	const [mrClassNames, mrCustomProperties] = getResponsiveStyles({
		className: 'yar-mr',
		customProperties: ['--margin-right'],
		propValues: marginValues,
		value: props.mr,
	});

	const [mbClassNames, mbCustomProperties] = getResponsiveStyles({
		className: 'yar-mb',
		customProperties: ['--margin-bottom'],
		propValues: marginValues,
		value: props.mb,
	});

	const [mlClassNames, mlCustomProperties] = getResponsiveStyles({
		className: 'yar-ml',
		customProperties: ['--margin-left'],
		propValues: marginValues,
		value: props.ml,
	});

	return [
		classNames(
			mClassNames,
			mxClassNames,
			myClassNames,
			mtClassNames,
			mrClassNames,
			mbClassNames,
			mlClassNames
		),
		mergeStyles(
			mCustomProperties,
			mxCustomProperties,
			myCustomProperties,
			mtCustomProperties,
			mrCustomProperties,
			mbCustomProperties,
			mlCustomProperties
		),
	] as const;
}
