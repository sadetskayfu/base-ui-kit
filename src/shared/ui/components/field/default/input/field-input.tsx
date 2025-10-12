import * as React from 'react';
import classNames from 'classnames';
import { BaseField } from '../../base';
import styles from './field-input.module.scss';

export const FieldInput = React.forwardRef(function FieldInput(
	props: FieldInput.Props,
	forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
	const { className, ...otherProps } = props;

	return (
		<BaseField.Input
			ref={forwardedRef}
			className={classNames(styles['input'], className)}
			{...otherProps}
		/>
	);
});

export namespace FieldInput {
	export type Props = BaseField.Input.Props;
}
