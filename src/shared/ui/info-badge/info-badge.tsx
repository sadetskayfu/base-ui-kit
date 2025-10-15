import type React from 'react';
import classNames from 'classnames';
import {
	extractProps,
	marginPropDefs,
	paddingPropDefs,
	radiusPropDef,
	type MarginProps,
	type PaddingProps,
	type RadiusProp,
} from '@/shared/lib/utilities-props';
import styles from './info-badge.module.scss';

function getNumberBadgeContent(value: React.ReactNode, maxValue: number) {
	if (Number(value) > maxValue) {
		return `${maxValue}+`;
	}

	return value;
}

export function InfoBadge(props: InfoBadge.Props) {
	const {
		children,
		className,
		size,
		color = 'grey',
		max,
		...otherProps
	} = extractProps(props, radiusPropDef, marginPropDefs, paddingPropDefs);

	const content = max ? getNumberBadgeContent(children, max) : children;

	return (
		<span
			className={classNames(
				styles['info-badge'],
				styles[`color-${color}`],
				{ [styles[`size-${size}`]]: size, [styles['without-content']]: Boolean(!children) },
				className
			)}
			{...otherProps}
		>
			{content}
		</span>
	);
}

export namespace InfoBadge {
	export interface Props
		extends RadiusProp,
			MarginProps,
			PaddingProps,
			React.ComponentProps<'span'> {
		color?: 'accent' | 'grey' | 'green' | 'red';
		size?: '1' | '2';
		max?: number;
	}
}
