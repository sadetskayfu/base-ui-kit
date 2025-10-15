import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
import { BaseDialog } from '../../base';
import styles from './dialog-header-close.module.scss';

export function DialogHeaderClose() {
	return (
		<BaseDialog.Close
			className={styles['close']}
			aria-label="Close dialog"
			render={
				<Button
					variant="clear"
					iconButton
					color="secondary-soft"
					size="3"
					autoFs
					radius="circular"
				/>
			}
		>
			<Icon.X />
		</BaseDialog.Close>
	);
}
