import * as React from 'react';
import { Footer, Header } from './_ui';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<React.Fragment>
			<Header />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
}
