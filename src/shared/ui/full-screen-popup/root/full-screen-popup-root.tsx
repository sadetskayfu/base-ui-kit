import * as React from 'react';
import classNames from 'classnames';
import { extractProps, gapPropDefs, type GapProps } from '@/shared/lib/utilities-props';
import { Aria } from '@/shared/ui/aria';
import styles from './full-screen-popup-root.module.scss';

export function FullScreenPopupRoot(props: FullScreenPopupRoot.Props) {
	const { children, className, ...otherProps } = extractProps(props, gapPropDefs);

	return (
		<Aria.Root>
			<Aria.Control className={classNames(styles['popup'], className)} {...otherProps}>
				{children}
			</Aria.Control>
		</Aria.Root>
	);
}

export namespace FullScreenPopupRoot {
	export interface Props extends GapProps {
		children?: React.ReactNode;
		className?: string;
	}
}
