import * as React from 'react';
import classNames from 'classnames';
import { BaseAvatar } from '../base';
import {
	extractProps,
	marginPropDefs,
	radiusPropDef,
	type MarginProps,
	type RadiusProp,
} from '@/shared/lib/utilities-props';
import styles from './avatar.module.scss';

export const Avatar = React.forwardRef(function Avatar(
	props: Avatar.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		className,
		fallback,
		src,
		size,
		color = 'secondary',
		variant = 'ghost',
		...otherProps
	} = extractProps(props, radiusPropDef, marginPropDefs);

	return (
		<BaseAvatar.Root
			className={classNames(styles['avatar'], size && styles[`size-${size}`], className)}
			ref={forwardedRef}
			{...otherProps}
		>
			<BaseAvatar.Image className={styles['image']} src={src} />
			{fallback && (
				<BaseAvatar.Fallback
					className={classNames(
						styles['fallback'],
						styles[`variant-${variant}`],
						styles[`color-${color}`],
						{
							[styles['one-letter']]:
								typeof fallback === 'string' && fallback.length === 1,
							[styles['two-letter']]:
								typeof fallback === 'string' && fallback.length === 2,
						}
					)}
				>
					{fallback}
				</BaseAvatar.Fallback>
			)}
		</BaseAvatar.Root>
	);
});

export namespace Avatar {
	export interface Props
		extends Omit<BaseAvatar.Root.Props, 'className'>,
			RadiusProp,
			MarginProps {
		className?: string;
		fallback?: React.ReactNode;
		src?: string;
		size?: '1' | '2' | '3' | '4' | '5';
		color?: 'accent' | 'secondary';
		variant?: 'solid' | 'ghost';
	}
}
