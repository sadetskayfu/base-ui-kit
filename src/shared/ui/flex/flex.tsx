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
import { flexPropDefs, type FlexOwnProps } from './flex.props';

export const Flex = React.forwardRef(function Flex(
	props: Flex.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { display = 'flex' } = props;

	const {
		tag = 'div',
		render,
		...otherProps
	} = extractProps(
		{ ...props, display },
		flexPropDefs,
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

export namespace Flex {
	export interface State {}
	export interface OwnProps
		extends LayoutProps,
			MarginProps,
			RadiusProp,
			BorderProp,
			BgColorProp,
			FlexOwnProps {
		tag?: keyof React.JSX.IntrinsicElements;
	}
	export interface Props extends useRenderElement.ModernComponentProps<'div', State>, OwnProps {}
}
