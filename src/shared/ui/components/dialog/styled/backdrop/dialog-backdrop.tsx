import { Backdrop } from '@/shared/ui/components/backdrop';
import { BaseDialog } from '../../base';

export function DialogBackdrop(props: DialogBackdrop.Props) {
	return <BaseDialog.Backdrop render={<Backdrop transitionDuration={300} />} {...props} />;
}

export namespace DialogBackdrop {
	export interface Props extends Omit<BaseDialog.Backdrop.Props, 'className'>, Backdrop.Props {}
}
