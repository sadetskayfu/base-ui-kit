import { ExampleSingleFieldCombobox } from "./ui/example-single-field-combobox";
import { ExampleMultiFieldCombobox } from "./ui/example-multi-field-combobox";
import { ExampleGroupCombobox } from "./ui/example-group-combobox";
import { ExampleInputInsidePopupCombobox } from "./ui/example-input-inside-popup-combobox";
import { Grid } from "@/shared/ui/grid";
import { useBreakpoints } from "@/shared/lib/breakpoints";
import { ExampleSingleMobileCombobox } from "./ui/example-single-mobile-combobox";
import { ExampleMultiMobileCombobox } from "./ui/example-multi-mobile-combobox";

export function ComboboxSection() {
    const {lg, md, sm} = useBreakpoints()

    return (
        <Grid gap='3' columns={lg ? '4' : md ? '3' : sm ? '2' : '1'}>
            <ExampleSingleFieldCombobox />
            <ExampleMultiFieldCombobox />
            <ExampleGroupCombobox />
            <ExampleInputInsidePopupCombobox />
            <ExampleSingleMobileCombobox />
            <ExampleMultiMobileCombobox />
        </Grid>
    )
}