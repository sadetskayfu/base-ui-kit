import * as React from 'react';
import classNames from 'classnames';

import {
	extractProps,
	layoutPropDefs,
	marginPropDefs,
	radiusPropDef,
	type RadiusProp,
	type LayoutProps,
	type MarginProps,
	type BorderProp,
	borderPropDef,
	type BgColorProp,
	bgColorPropDef,
} from '@/shared/lib/utilities-props';
import { useRenderElement } from '@/shared/hooks';
import { type GridOwnProps, gridPropDefs } from './grid.props';

export const Grid = React.forwardRef(function Grid(
	props: Grid.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		tag = 'div',
		render,
		className,
		...otherProps
	} = extractProps(props, gridPropDefs, layoutPropDefs, marginPropDefs, radiusPropDef, borderPropDef, bgColorPropDef);

	return useRenderElement(tag, {
		render,
		ref: forwardedRef,
		props: [{ className: classNames('yar-Grid', className) }, otherProps],
	});
});

export namespace Grid {
	export interface State {}
	export interface Props
		extends useRenderElement.ModernComponentProps<'div', State>,
			LayoutProps,
			MarginProps,
			RadiusProp,
			BorderProp,
			BgColorProp,
			GridOwnProps {
		tag?: keyof React.JSX.IntrinsicElements;
	}
}
