import Game from '../../models/Game'
import Product from '../Product'
import { List, Container, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  // Game vem de models/Game, ele substitui o conteudo Faka (Hard Coded), ele deve ser omitido em ProductList/styles.ts
  games: Game[]
}

const ProductList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {/* Faz a iteração de Games, estes valores são informados em pages/Home/index.tsx */}
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
