import * as React from 'react';

import {
	extractProps,
	layoutPropDefs,
	marginPropDefs,
	radiusPropDef,
	borderPropDef,
	bgColorPropDef,
	type RadiusProp,
	type LayoutProps,
	type MarginProps,
	type BorderProp,
	type BgColorProp,
} from '@/shared/lib/utilities-props';
import { useRenderElement } from '@/shared/hooks';
import { boxPropDefs, type BoxOwnProps } from './box.props';

export const Box = React.forwardRef(function Box(
	props: Box.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		tag = 'div',
		render,
		...otherProps
	} = extractProps(
		props,
		boxPropDefs,
		layoutPropDefs,
		marginPropDefs,
		radiusPropDef,
		borderPropDef,
		bgColorPropDef
	);

	return useRenderElement(tag, { render, ref: forwardedRef, props: [otherProps] });
});

export namespace Box {
	export interface State {}
	export interface OwnProps
		extends LayoutProps,
			MarginProps,
			RadiusProp,
			BorderProp,
			BgColorProp,
			BoxOwnProps {
		tag?: keyof React.JSX.IntrinsicElements;
	}
	export interface Props extends useRenderElement.ModernComponentProps<'div', State>, OwnProps {}
}
