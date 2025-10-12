import * as React from 'react';
import { AriaRootContext } from './aria-root-context';

/**
 * Groups all parts of the aria. Doesn’t render its own HTML element.
 */
export function AriaRoot({ children }: AriaRoot.Props) {
	const [labelId, setLabelId] = React.useState<string | undefined>(undefined);
	const [helperTextIds, setHelperTextIds] = React.useState<string[]>([]);

	const contextValue: AriaRootContext = React.useMemo(
		() => ({ labelId, setLabelId, helperTextIds, setHelperTextIds }),
		[labelId, helperTextIds]
	);

	return <AriaRootContext.Provider value={contextValue}>{children}</AriaRootContext.Provider>;
}

export namespace AriaRoot {
	export interface Props {
		children?: React.ReactNode;
	}
}
