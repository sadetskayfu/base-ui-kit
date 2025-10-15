import * as React from 'react';
import { useId, useModernLayoutEffect } from '@/shared/hooks';
import { useAriaRootContext } from '../root/aria-root-context';
import { Text } from '@/shared/ui/text';

/**
 * Renders a `<Text>` component. By default prop `tag` = `span` element.
 */
export const AriaLabel = React.forwardRef(function AriaLabel(
	props: AriaLabel.Props,
	forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
	const { id: idProp, ...otherProps } = props;

	const id = useId(idProp);

	const { setLabelId } = useAriaRootContext();

	useModernLayoutEffect(() => {
		setLabelId(id);

		return () => {
			setLabelId(undefined);
		};
	}, [id, setLabelId]);

	return <Text ref={forwardedRef} id={id} {...otherProps} />;
});

export namespace AriaLabel {
	export type Props = Text.Props
}
