import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
    setFilteredCandidates(candidates);
  }, [candidates]);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log("currentParams", currentParams);
  }, [searchParams]);

  const filterItems = debounce((value: string) => {
    if (value) {
      const newItems = candidates.filter((item: Candidate) => {
        return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
      });
      setFilteredCandidates(newItems);
    } else {
      setFilteredCandidates(candidates);
    }
  }, 100);

  const onSearch = (value: string) => {
    setSearchText(value);
    filterItems(value);
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
          <Table headings={Headings} items={filteredCandidates} />
        ) : null}
        {isError && !filteredCandidates?.length && (
          <S.Message type="error">Failed to fetch items</S.Message>
        )}
      </>
    </S.Wrapper>
  );
};
export default CandidateList;
