import classNames from 'classnames';
import { BaseAutocomplete } from '../../base';
import styles from './autocomplete-empty.module.scss';

export function AutocompleteEmpty(props: AutocompleteEmpty.Props) {
	const { className, ...otherProps } = props;

	return (
		<BaseAutocomplete.Empty className={classNames(styles['empty'], className)} {...otherProps} />
	);
}

export namespace AutocompleteEmpty {
	export interface Props extends BaseAutocomplete.Empty.Props {}
}
