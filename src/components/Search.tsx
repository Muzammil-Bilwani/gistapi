import React, { useContext, useState } from "react"
import styled from "styled-components"
import { SearchIcon } from "@primer/octicons-react"
import "./search.css"
import { debounce } from "../services/helper"
import GistContext from "../context/GistContext"
import { GistContextValue } from "../context/GistProvider"

const Search = () => {
  const { onChange } = useContext(GistContext) as GistContextValue
  const [searchValue, setSearchValue] = useState("")

  const handleChange = ({
    target: { value }
  }: {
    target: { value: string }
  }) => {
    setSearchValue(value)
    debounce(() => onChange(value))
  }

  return (
    <Wrapper>
      <InputBox>
        <SearchIcon className="searchIcon" />
        <Input
          value={searchValue}
          onChange={handleChange}
          placeholder="Search Gists for the username"
        />
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;
  margin-left: 8px;
  &:focus {
    outline: 0;
  }
`

export default Search
