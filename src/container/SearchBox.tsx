import SearchBoxView from '../view/SearchBoxView';

interface Props {
  onSearch: (input: string) => void;
}

const SearchBox = ({onSearch}: Props) => {
  return <SearchBoxView onSearch={onSearch} />;
};

export default SearchBox;
