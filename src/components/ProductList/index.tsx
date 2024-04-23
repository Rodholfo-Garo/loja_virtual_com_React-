import Product from '../Product'
import { List, Container, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          category="ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$150']}
          system="Windows"
          title="Nome do jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
