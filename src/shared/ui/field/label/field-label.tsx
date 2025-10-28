import classNames from 'classnames';
import { FormLabel } from '../../form-label';
import { BaseField } from '../../base/field';
import styles from './field-label.module.scss';

/**
 * Renders a `<FormLabel>` component.
 */
export function FieldLabel(props: FieldLabel.Props) {
	const { children, className, tag = 'label', weight = 'medium', color, ...otherProps } = props;

	return (
		<BaseField.Label
			className={classNames(styles['label'], className)}
			render={(props, state) => (
				<FormLabel
					tag={tag}
					required={state.required}
					weight={weight}
					color={state.errored ? 'error-soft' : state.focused ? 'accent-soft' : color}
					{...props}
					{...otherProps}
				/>
			)}
		>
			{children}
		</BaseField.Label>
	);
}

export namespace FieldLabel {
	export interface Props extends FormLabel.Props {}
}
