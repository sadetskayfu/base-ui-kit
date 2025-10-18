import * as React from 'react';
import classNames from 'classnames';
import { FieldInputContainer } from '../input-container/field-input-container';
import styles from './button-field.module.scss';

export const ButtonField = React.forwardRef(function ButtonField(
	props: ButtonField.Props,
	forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
	const { className, ...otherProps } = props;

	return (
		<FieldInputContainer
			className={classNames(styles['button-field'], className)}
			render={<button ref={forwardedRef} />}
			{...otherProps}
		/>
	);
});

export namespace ButtonField {
	export interface Props extends FieldInputContainer.Props {}
}
