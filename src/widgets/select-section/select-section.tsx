import { ExampleSingleSelect } from "./ui/example-single-select";
import { ExampleMultiSelect } from "./ui/example-multi-select";
import { ExampleGroupSelect } from "./ui/example-group-select";
import { Grid } from "@/shared/ui/components/grid";

export function SelectSection() {
    return (
        <Grid gap='3' columns='2' align="center" width="50%">
            <ExampleSingleSelect />
            <ExampleMultiSelect />
            <ExampleGroupSelect />
        </Grid>
    )
}