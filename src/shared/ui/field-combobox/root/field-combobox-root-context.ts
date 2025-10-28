import * as React from  'react'
import { useContext } from '@/shared/hooks'

export interface FieldComboboxRootContext {
    inputContainerRef: React.RefObject<HTMLDivElement | null>
}

export const FieldComboboxRootContext = React.createContext<FieldComboboxRootContext | undefined>(undefined)

export function useFieldComboboxRootContext() {
    return useContext(FieldComboboxRootContext, 'FieldComboboxRootContext is missing.')
}