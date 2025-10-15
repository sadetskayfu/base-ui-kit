import * as React from 'react'
import { Alert } from "../index";
import { useContext } from '@/shared/hooks';

export interface AlertRootContext {
    severity: Alert.Root.Severity
}

export const AlertRootContext = React.createContext<AlertRootContext | undefined>(undefined)

export function useAlertRootContext() {
    return useContext(AlertRootContext, 'AlertRootContext is missing. Alert parts must be used within <Alert.Root>.')
}

