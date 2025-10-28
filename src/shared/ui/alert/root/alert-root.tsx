import * as React from 'react';
import classNames from 'classnames';
import { Aria } from '../../aria';
import { AlertRootContext } from './alert-root-context';
import { extractProps, marginPropDefs, radiusPropDef, type MarginProps, type RadiusProp } from '@/shared/lib/utilities-props';
import styles from './alert-root.module.scss';

export function AlertRoot(props: AlertRoot.Props) {
	const {
		className,
		children,
		severity = 'info',
		variant = 'ghost',
		...otherProps
	} = extractProps(props, marginPropDefs, radiusPropDef)

	const contextValue: AlertRootContext = React.useMemo(() => ({ severity }), [severity]);

	return (
		<Aria.Root>
			<Aria.Control
				className={classNames(
					styles['alert'],
					styles[`severity-${severity}`],
					styles[`variant-${variant}`],
					className
				)}
				{...otherProps}
			>
				<AlertRootContext.Provider value={contextValue}>
					{children}
				</AlertRootContext.Provider>
			</Aria.Control>
		</Aria.Root>
	);
}

export namespace AlertRoot {
	export type Variant = 'ghost' | 'outlined';
	export type Severity = 'info' | 'warning' | 'error' | 'success';

	export interface Props extends React.ComponentProps<'div'>, RadiusProp, MarginProps {
		className?: string;
		/**
		 * @default 'info'
		 */
		severity?: Severity;
		/**
		 * @default 'ghost'
		 */
		variant?: Variant;
	}
}
