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
import { type GridOwnProps, gridPropDefs } from './grid.props';

export const Grid = React.forwardRef(function Grid(
	props: Grid.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { display = 'grid' } = props;

	const {
		tag = 'div',
		render,
		...otherProps
	} = extractProps(
		{ ...props, display },
		gridPropDefs,
		layoutPropDefs,
		marginPropDefs,
		radiusPropDef,
		borderPropDef,
		bgColorPropDef
	);

	return useRenderElement(tag, {
		render,
		ref: forwardedRef,
		props: [otherProps],
	});
});

export namespace Grid {
	export interface State {}
	export interface OwnProps
		extends LayoutProps,
			MarginProps,
			RadiusProp,
			BorderProp,
			BgColorProp,
			GridOwnProps {
		tag?: keyof React.JSX.IntrinsicElements;
	}
	export interface Props extends useRenderElement.ModernComponentProps<'div', State>, OwnProps {}
}
