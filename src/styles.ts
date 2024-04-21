import { createGlobalStyle } from 'styled-components'

//Cores do Projeto

const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84'
}

// Reset CSS
export const GlobalCss = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  font-family: Roboto, sans-serif;
}

body{
  background-color:${cores.preta};
  color:${cores.branca};
}
`
