import classNames from 'classnames';
import { Icon } from '@/shared/ui/icons';

export function AutocompleteIcon({ className }: { className?: string }) {
	return <Icon.ChevronsUpDown className={classNames('ml-auto', className)} />;
}
