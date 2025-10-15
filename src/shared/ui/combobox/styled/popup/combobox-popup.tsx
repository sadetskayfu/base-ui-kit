import classNames from 'classnames';
import { BaseCombobox } from '../../base';
import { Popup } from '@/shared/ui/popup';
import styles from './combobox-popup.module.scss';

export function ComboboxPopup(props: ComboboxPopup.Props) {
	const { className, bgColor = 'grey-2', p = '1', radius = '3', ...otherProps } = props;

	return (
		<BaseCombobox.Popup
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

export namespace ComboboxPopup {
	export interface Props extends Omit<BaseCombobox.Popup.Props, 'className'>, Popup.Props {}
}
