import * as React from 'react';
import {
	extractProps,
	layoutPropDefs,
	marginPropDefs,
	radiusPropDef,
	type RadiusProp,
	type LayoutProps,
	type MarginProps,
} from '@/shared/lib/utilities-props';
import { useRenderElement } from '@/shared/hooks';
import { flexPropDefs, type FlexOwnProps } from './flex.props';

export const Flex = React.forwardRef(function Flex(
	props: Flex.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { display = 'flex', justify = 'start' } = props

	const {
		tag = 'div',
		render,
		...otherProps
	} = extractProps({ ...props, display, justify }, flexPropDefs, layoutPropDefs, marginPropDefs, radiusPropDef);

	return useRenderElement(tag, {
		render,
		ref: forwardedRef,
		props: [otherProps],
	});
});

export namespace Flex {
	export interface State {}
	export interface Props
		extends useRenderElement.ModernComponentProps<'div', State>,
			LayoutProps,
			MarginProps,
			RadiusProp,
			FlexOwnProps {
		tag?: keyof React.JSX.IntrinsicElements;
	}
}
