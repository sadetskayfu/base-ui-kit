import classNames from 'classnames';
import { FormLabel } from '@/shared/ui/components/form-label';
import { BaseField } from '../../base';
import styles from './field-label.module.scss';

/**
 * Renders a `<FormLabel>` component.
 */
export function FieldLabel(props: FieldLabel.Props) {
	const { children, className, tag = 'label', color, ...otherProps } = props;

	return (
		<BaseField.Label
			className={classNames(styles['label'], className)}
			render={(props, state) => (
				<FormLabel
					tag={tag}
					required={state.required}
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
