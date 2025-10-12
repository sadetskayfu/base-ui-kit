import * as React from 'react';
import classNames from 'classnames';
import type { Ripple as RippleType } from '../model/ripple';
import styles from './ripple.module.css';

interface RippleProps {
	ripples: RippleType[];
	size?: 'default' | 'small';
	removeRipple: (rippleId: number) => void;
}

export const Ripple = React.forwardRef(function Ripple(
	{ ripples, size = 'default', removeRipple }: RippleProps,
	ref: React.ForwardedRef<HTMLSpanElement>
) {
	return (
		<span ref={ref} className={classNames(styles['ripple-wrapper'], styles[`size-${size}`])}>
			{ripples.length > 0 &&
				ripples.map(ripple => (
					<span
						className={classNames(styles['ripple'], {
							[styles['fade']]: ripple.ending,
						})}
						key={ripple.id}
						style={{
							top: ripple.y,
							left: ripple.x,
							animationDuration: size === 'default' ? '1s' : '0.6s',
						}}
						onTransitionEnd={event => {
							if (ripple.ending && event.propertyName === 'opacity') {
								removeRipple(ripple.id);
							}
						}}
					/>
				))}
		</span>
	);
});
