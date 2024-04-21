import styled, { createGlobalStyle } from 'styled-components'

//Cores do Projeto

export const cores = {
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
  list-style:none;
}

body{
  background-color:${cores.preta};
  color:${cores.branca};
  padding-top:40px;
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
