import React from "react"
import styled from "styled-components"
import Header from "./components/Header"
import GlobalStyles from "./GlobalStyle"
import { QueryClient, QueryClientProvider } from "react-query"
import GistList from "./components/GistList/GistList"
import { GistContainer } from "./context/GistProvider"

const App = () => {
  const queryClient = new QueryClient()

  return (
    <Wrapper className="App" data-testid="app">
      <QueryClientProvider client={queryClient}>
        <GistContainer>
          <Header />
          <GlobalStyles />
          <GistList />
        </GistContainer>
      </QueryClientProvider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`

export default App
