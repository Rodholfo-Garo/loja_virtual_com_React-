import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
      exercitationem sit facere, iste delectus itaque, minima at voluptatibus,
      hic incidunt et vitae quaerat adipisci quos est quae doloremque
      consequuntur. Reprehenderit.
    </Descricao>
  </Card>
)

export default Product
