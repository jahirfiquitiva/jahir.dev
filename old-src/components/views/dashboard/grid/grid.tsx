import { GridItem, StyledGrid } from './grid.styles';

export const Grid = () => {
  return <StyledGrid>
    <GridItem css={{ gridArea:'one' }} />
    <GridItem css={{ gridArea:'two' }} />
    <GridItem tall css={{ gridArea:'three' }} />
    <GridItem tall css={{ gridArea:'four' }} />
    <GridItem css={{ gridArea:'five' }} />
    <GridItem css={{ gridArea:'six' }} />
    <GridItem css={{ gridArea:'seven' }} />
    <GridItem wide css={{ gridArea:'eight' }} />
    <GridItem css={{ gridArea:'nine' }} />
    <GridItem css={{ gridArea:'ten' }} />
    <GridItem wide css={{ gridArea:'eleven' }} />
    <GridItem css={{ gridArea:'twelve' }} />
    <GridItem css={{ gridArea:'thirteen' }} />
    <GridItem css={{ gridArea:'fourteen' }} />
    <GridItem wide css={{ gridArea:'fifteen' }} />
    <GridItem css={{ gridArea:'sixteen' }} />
  </StyledGrid>;
};