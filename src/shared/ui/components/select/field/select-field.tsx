import * as React from 'react';
import classNames from 'classnames';
import { BaseSelect } from '../base';
import {
	extractProps,
	marginPropDefs,
	radiusPropDef,
	type MarginProps,
	type RadiusProp,
} from '@/shared/lib/utilities-props';
import { Aria } from '@/shared/ui/components/aria';
import { useSelectRootContext } from '../root/select-root-context';
import { useMergedRefs } from '@base-ui-components/utils/useMergedRefs';
import styles from './select-field.module.scss';

export const SelectField = React.forwardRef(function SelectField(
	props: SelectField.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const {
		className,
		size = '2',
		...otherProps
	} = extractProps(props, radiusPropDef, marginPropDefs);

	const { triggerRef, focused, setFocused, errored } = useSelectRootContext();

	return (
		<Aria.Control
			render={
				<BaseSelect.Trigger
					ref={useMergedRefs(triggerRef, forwardedRef)}
					className={classNames(
						styles['field'],
						styles[`size-${size}`],
						className
					)}
					aria-invalid={errored ? 'true' : undefined}
					data-focused={focused ? '' : undefined}
					data-errored={errored ? '' : undefined}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					{...otherProps}
				/>
			}
		/>
	);
});

export namespace SelectField {
	export interface Props
		extends Omit<BaseSelect.Trigger.Props, 'className'>,
			RadiusProp,
			MarginProps {
		className?: string;
		size?: '1' | '2';
	}
}
