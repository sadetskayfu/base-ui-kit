import * as React from 'react';
import { useId, useModernLayoutEffect } from '@/shared/hooks';
import { useAriaRootContext } from '../root/aria-root-context';
import { Text } from '@/shared/ui/text';

/**
 * Renders a `<Text>` component. By default prop `tag` = `p` element.
 */
export const AriaDescription = React.forwardRef(function AriaDescription(
	props: AriaDescription.Props,
	forwardedRef: React.ForwardedRef<HTMLParagraphElement>
) {
	const { id: idProp, tag = 'p', ...otherProps } = props;

	const id = useId(idProp);

	const { setHelperTextIds } = useAriaRootContext();

	useModernLayoutEffect(() => {
		setHelperTextIds(prev => [...prev, id]);

		return () => {
			setHelperTextIds(prev => {
				return prev.filter(v => v !== id);
			});
		};
	}, [id, setHelperTextIds]);

    return <Text ref={forwardedRef} id={id} tag={tag} {...otherProps} />;
});

export namespace AriaDescription {
	export type Props = Text.Props
}
