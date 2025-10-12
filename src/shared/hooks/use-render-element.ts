import * as React from 'react';
import classNames from 'classnames';

import { EMPTY_OBJECT } from '@/shared/constants';
import { useRender, mergePropsN } from '@base-ui-components/react';

type IntrinsicTagName = keyof React.JSX.IntrinsicElements;
type Props<TagName> = TagName extends keyof React.JSX.IntrinsicElements
	? React.JSX.IntrinsicElements[TagName]
	: React.HTMLAttributes<any>;

type HTMLProps<T = any> = React.HTMLAttributes<T> & {
	ref?: React.Ref<T>;
};

function resolveClassName<State>(
	className: string | ((state: State) => string | undefined) | undefined,
	state: State
) {
	return typeof className === 'function' ? className(state) : className;
}

export function useRenderElement<
	TagName extends IntrinsicTagName,
	State extends Record<string, any>,
	RenderedElementType extends Element,
	Enabled extends boolean | undefined,
>(
	tagName: TagName,
	params: Omit<
		useRender.Parameters<State, RenderedElementType, Enabled>,
		'props' | 'defaultTagName'
	> & {
		className?: string | ((state: State) => string | undefined);
		props: Props<TagName> | Array<Props<TagName> | undefined>;
	}
) {
	const {
		className,
		state = EMPTY_OBJECT as State,
		enabled = true,
		props,
		...otherParams
	} = params;

	const outProps: React.HTMLAttributes<any> & React.RefAttributes<any> = enabled
		? Array.isArray(props)
			? mergePropsN(props)
			: props
		: {};

	if (className) {
		outProps.className = classNames(outProps.className, resolveClassName(className, state));
	}

	return useRender({
		defaultTagName: tagName,
		props: outProps as Record<string, unknown>,
		state,
		enabled,
		...otherParams,
	});
}

export namespace useRenderElement {
	export type ModernComponentProps<ElementType extends React.ElementType, State> = Omit<
		useRender.ComponentProps<ElementType, State, Omit<HTMLProps, 'color' | 'size'>>,
		'color' | 'size'
	>;
	export type ModernComponentPropsWithCl<ElementType extends React.ElementType, State> = Omit<
		useRender.ComponentProps<ElementType, State, Omit<HTMLProps, 'color' | 'size'>>,
		'className' | 'color' | 'size'
	> & { className?: string | ((state: State) => string | undefined) };
}
