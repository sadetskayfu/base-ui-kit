import classNames from 'classnames';
import { BaseSelect } from '../../base';
import { Popup } from '@/shared/ui/popup';
import styles from './select-popup.module.scss';

export function SelectPopup(props: SelectPopup.Props) {
	const { className, bgColor = 'grey-2', p = '1', radius = '3', ...otherProps } = props;

	return (
		<BaseSelect.Popup
			render={
				<Popup
					bgColor={bgColor}
					p={p}
					radius={radius}
					className={classNames(styles['popup'], className)}
				/>
			}
			{...otherProps}
		/>
	);
}

export namespace SelectPopup {
	export interface Props extends Omit<BaseSelect.Popup.Props, 'className'>, Popup.Props {}
}
