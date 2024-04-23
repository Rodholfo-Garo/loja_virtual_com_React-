import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

// Aplicando a Variação no Background (omitimos o Title)
export const Container = styled.section<Omit<Props, 'title'>>`
  padding: 32px 0;
  // Criando a variação do fundo da seção dos cards
  background-color: ${(props) =>
    props.background === 'black' ? cores.preta : cores.cinza};

  // Estilizando a borda do card ao mudar o fundo
  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preta};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`
export const Title = styled.h2`
  fonts-size: 18px;
  font-weight: bold;
`
