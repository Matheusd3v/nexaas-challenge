import Input from "../../atoms/input"
import { Magnifier } from "../../atoms/magnifier"
import { SearchBarContainer } from "./style"

export interface ISearchBar {
    callback?: (data?: any) => void;
}

const SearchBar = ({ callback }: ISearchBar) => {
  return (
    <SearchBarContainer>
        <Magnifier/>
        <Input
            placeholder={'Busque por clientes'}
        />
    </SearchBarContainer>
  )
}

export default SearchBar