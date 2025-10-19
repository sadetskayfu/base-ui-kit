import { Icon } from '@/shared/ui/icons';
import { BaseDialog } from '../../base';
import { Button } from '@/shared/ui/button';
import styles from './dialog-header-close.module.scss';

export function DialogHeaderClose() {
	return (
		<BaseDialog.Close
			render={
				<Button
                    className={styles['close-button']}
					radius="circular"
					color="secondary-soft"
					variant="clear"
					iconButton
					autoFs
				/>
			}
		>
			<Icon.X />
		</BaseDialog.Close>
	);
}
