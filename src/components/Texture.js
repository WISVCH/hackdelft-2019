import styled from 'styled-components'

import texture from 'assets/texture.svg'

const Texture = styled.div`
  pointer-events: none;
  position: absolute;
  background: url(${texture}) repeat center / 6em;
  mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0, 0, 0, 1), transparent);
`

export default Texture
