import { useEffect, useState, SetStateAction } from "react";
import { useSearchParams } from "react-router-dom";
import queryString from "query-string";
import { sortByItems } from "../utils/sort";
import { debounce } from "../utils/debounce";
import Input from "./Input";
import Table from "./Table";
import { Headings } from "./Headings";
import Spinner from "./Spinner";
import { Candidate } from "../@types/Candidate";
import useCandidate from "../utils/useCandidate";
import * as S from "./styles";

const CandidateList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCandidates, setFilteredCandidates] = useState<
    Array<Candidate>
  >([]);

  const { candidates, showLoader, isError } = useCandidate();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    setSearchText(currentParams?.searchText);

    if (candidates?.length > 0) {
      filterItems({
        searchText: currentParams?.searchText,
        sortBy: currentParams?.sortBy,
        direction: currentParams?.direction,
      });
    }
  }, [candidates, searchParams]);

  const filterItems = ({
    searchText,
    sortBy,
    direction,
  }: {
    searchText: string;
    sortBy: string;
    direction: string;
  }) => {
    let filteredResult: SetStateAction<Candidate[]> = candidates;

    if (searchText) {
      filteredResult = candidates?.filter((item: Candidate) => {
        return item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      });
    }

    if (sortBy && direction) {
      filteredResult = sortByItems(filteredResult, sortBy, direction);
    }
    setFilteredCandidates(filteredResult);
  };

  const onSearch = (searchText: string) => {
    const currentParams = Object.fromEntries([...searchParams]);

    const urlParams = {
      ...currentParams,
      searchText,
    };
    setSearchParams(
      queryString.stringify(urlParams, { skipEmptyString: true })
    );
  };

  const onSort = (columnName: string, direction: string) => {
    const currentParams = Object.fromEntries([...searchParams]);

    const urlParams = {
      ...currentParams,
      sortBy: columnName,
      direction,
    };
    setSearchParams(
      queryString.stringify(urlParams, { skipEmptyString: true })
    );
  };

  return (
    <S.Wrapper>
      <>
        <Input
          showIcon
          placeholder="search"
          onChange={onSearch}
          value={searchText}
        />
        {showLoader && <Spinner />}

        {!filteredCandidates?.length && !isError && !showLoader ? (
          <S.Message>No data to display</S.Message>
        ) : null}

        {filteredCandidates?.length && !isError && !showLoader ? (
          <Table
            headings={Headings}
            items={filteredCandidates}
            onSort={onSort}
          />
        ) : null}
        {isError && !filteredCandidates?.length && (
          <S.Message type="error">Failed to fetch items</S.Message>
        )}
      </>
    </S.Wrapper>
  );
};
export default CandidateList;
