# [jahir.dev](https://jahir.dev)

## Project Structure

### Elements

This folder includes the most simple react components:

- `button`
  - `Button` (supports setting an `Icon`)
  - `LinkButton` (`a` that looks like `Button`)
  - `LinkIconButton` (`a` that looks like `Button` but only has an `Icon`)
  - `ButtonGroup` (`div` that wraps multiple `Button`s)
- `card`
  - `Card` (`div` with a soft border)
  - `ExtLinkCard` (`a` that looks like `Card`)
- `chip`
  - `Chip` (`span` with full rounded corners)
  - `ChipGroup` (`ul` to wrap `Chip`s)

### Components

This folder includes slightly more complex components. All components in this folder use at least one of the components in `Elements`

### Blocks

This folder includes complex components. All components in this folder use at least one of the components in `Components` and `Elements` (either separately or grouped)

### Sections

This folder includes the actual website sections.
