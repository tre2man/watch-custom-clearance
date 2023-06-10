import SearchBoxView from './SearchBoxView';

interface Props {
  onSearch: (input: string) => void;
}

const SearchBox = ({onSearch}: Props) => {
  return <SearchBoxView onSearch={onSearch} />;
};

export default SearchBox;
