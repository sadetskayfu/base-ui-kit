import { BaseMenu } from '../../base';
import { Popup } from '@/shared/ui/popup';

export function MenuPopup(props: MenuPopup.Props) {
	const { bgColor = 'grey-2', p = '1', radius = '3', ...otherProps } = props;

	return (
		<BaseMenu.Popup
			render={<Popup bgColor={bgColor} p={p} radius={radius} />}
			{...otherProps}
		/>
	);
}

export namespace MenuPopup {
	export interface Props extends Omit<BaseMenu.Popup.Props, 'className'>, Popup.Props {}
}
