import styled, { css } from 'styled-components'

import ContentWithFlag from '../table/ContentWithFlag'

const Selected = css`
  color: blue;
`

const Picked = css`
  filter: grayscale(0.5);
  opacity: 0.4;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
  selected: boolean,
  picked: boolean,
}

const PotContent = styled(ContentWithFlag)<Props>`
  ${props => props.selected && Selected}
  ${props => props.picked && Picked}
`

export default PotContent
