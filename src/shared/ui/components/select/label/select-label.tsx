import classNames from 'classnames';
import { Aria } from '@/shared/ui/components/aria';
import { FormLabel } from '@/shared/ui/components/form-label';
import { useSelectRootContext } from '../root/select-root-context';
import styles from './select-label.module.scss';

export function SelectLabel(props: SelectLabel.Props) {
	const { className, color = 'soft', tag = 'span', ...otherProps } = props;

	const { required, errored, focused, disabled, triggerRef } = useSelectRootContext();

	return (
		<Aria.Label
			className={classNames(styles['label'], className)}
            onClick={() => {
                if (!disabled) {
                    triggerRef.current?.focus()
                }
            }}
			render={
				<FormLabel
                    tag={tag}
					required={required}
					color={errored ? 'error-soft' : focused ? 'accent-soft' : color}
				/>
			}
			{...otherProps}
		/>
	);
}

export namespace SelectLabel {
	export interface Props extends FormLabel.Props {}
}
