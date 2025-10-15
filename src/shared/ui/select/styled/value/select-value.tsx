import classNames from 'classnames';
import { BaseSelect } from '../../base';
import styles from './select-value.module.scss';

function isDirty(value: any) {
	const isArray = Array.isArray(value);

	if (isArray && value.length > 0) {
		return true;
	}

	if (!isArray && value) {
		return true;
	}

	return false;
}

export function SelectValue(props: SelectValue.Props) {
	const { className, children, placeholder, truncate, ...otherProps } = props;

	return (
		<BaseSelect.Value
			className={state =>
				classNames(
					styles['value'],
					{
						[styles['is-placeholder']]: placeholder && !isDirty(state.value),
						['truncate']: truncate,
					},

					className
				)
			}
			{...otherProps}
		>
			{value => {
				if (placeholder && !isDirty(value)) {
					return placeholder;
				}
				if (typeof children === 'function') {
					return children(value);
				}
				return children;
			}}
		</BaseSelect.Value>
	);
}

export namespace SelectValue {
	export interface Props extends Omit<BaseSelect.Value.Props, 'className'> {
		className?: string;
		placeholder?: string;
		truncate?: boolean;
	}
}
