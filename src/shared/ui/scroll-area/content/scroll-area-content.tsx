import classNames from 'classnames';
import { extractProps, paddingPropDefs, type PaddingProps } from '@/shared/lib/utilities-props';
import { ScrollArea as BaseScrollArea } from '@base-ui-components/react';
import styles from './scroll-area-content.module.scss';

export function ScrollAreaContent(props: ScrollAreaContent.Props) {
	const { className, variablePadding, ...otherProps } = extractProps(props, paddingPropDefs);

	return (
		<BaseScrollArea.Content
			className={classNames(
				styles['content'],
				{ [styles['variable-padding']]: variablePadding },
				className
			)}
			{...otherProps}
		/>
	);
}

export namespace ScrollAreaContent {
	export interface Props extends Omit<BaseScrollArea.Content.Props, 'className'>, PaddingProps {
		className?: string;
        /**
         * Set `true`, if content padding < scrollbar width (16px)
         */
		variablePadding?: boolean;
	}
}
