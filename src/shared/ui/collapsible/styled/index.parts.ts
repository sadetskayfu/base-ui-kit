import { BaseCollapsible } from '../base'

export { CollapsiblePanel as Panel } from './panel/collapsible-panel'

export const Root = BaseCollapsible.Root
export const Trigger = BaseCollapsible.Trigger

export namespace Root {
    export interface Props extends BaseCollapsible.Root.Props {}
}
export namespace Trigger {
    export interface Props extends BaseCollapsible.Trigger.Props {}
}