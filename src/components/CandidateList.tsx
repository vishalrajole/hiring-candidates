import { useEffect, useState } from "react";
import { debounce } from "../utils/debounce";
import * as S from "./styles";
import Input from "./Input";
import Table from "./Table";
import { Headings } from "./Headings";
import Spinner from "./Spinner";
import { Candidate } from "../@types/Candidate";

export const BASE_PATH = "https://personio-fe-coding-challenge.vercel.app/api";

const CandidateList = () => {
  const [candidates, setCandidates] = useState<Array<Candidate>>([]);
  const [filteredCandidates, setFilteredCandidates] = useState<
    Array<Candidate>
  >([]);
  const [isError, setIsError] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const [searchText, setSearchText] = useState("");

  const fetchCandidates = async () => {
    try {
      setShowLoader(true);
      const response = await fetch(`${BASE_PATH}/candidates`);
      const candidates = await response.json();
      setCandidates(candidates.data);
      setFilteredCandidates(candidates.data);
      setShowLoader(false);
    } catch (error) {
      console.log("candidates fetch error", error);
      setShowLoader(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

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
          <Table
            headings={Headings}
            items={filteredCandidates}
            onRowClick={() => {}}
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
