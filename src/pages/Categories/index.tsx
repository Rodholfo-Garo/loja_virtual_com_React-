import ProductList from '../../components/ProductList'
import Game from '../../models/Game'
// Importando Imagem
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Lorem ...................',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Lorem ...................',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['5%', 'R$285,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description: 'Lorem ...................',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Lorem ...................',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Rpg',
    description: 'Lorem ...................',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'Rpg',
    description: 'Lorem ...................',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'Rpg',
    description: 'Lorem ...................',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'Rpg',
    description: 'Lorem ...................',
    title: 'Resident Evil 4',
    system: 'Nintendo',
    infos: ['05/12'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="gray" />
    <ProductList games={emBreve} title="AÇÃO" background="black" />
    <ProductList games={promocoes} title="AVENTURA" background="gray" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
