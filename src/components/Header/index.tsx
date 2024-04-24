import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

// Os () na função significa apenas um retorno, se eu colocar as {} eu tenho que descriminar um retorno, informar oq sera retornado
const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias </Link>
          </LinkItem>

          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>

          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0-produtos(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)
export default Header
