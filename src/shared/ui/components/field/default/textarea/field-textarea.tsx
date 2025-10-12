import * as React from 'react';
import classNames from 'classnames';
import { FieldInput } from '../input/field-input';
import styles from './field-textarea.module.scss';

export const FieldTextarea = React.forwardRef(function FieldTextarea(
	props: FieldInput.Props & React.ComponentProps<'textarea'>,
	forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
	const { className, ...otherProps } = props;

	return (
		<FieldInput
			ref={forwardedRef}
			className={classNames(styles['textarea'], 'custom-scrollbar-s', className)}
			render={<textarea />}
			{...otherProps}
		/>
	);
});
