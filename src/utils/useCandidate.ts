import { useEffect, useState } from "react";
import { Candidate } from "../@types/Candidate";

export const BASE_PATH = "https://personio-fe-coding-challenge.vercel.app/api";

const useCandidate = () => {
  const [candidates, setCandidates] = useState<Array<Candidate>>([]);
  const [isError, setIsError] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const fetchCandidates = async () => {
    try {
      setShowLoader(true);
      const response = await fetch(`${BASE_PATH}/candidates`);
      const candidates = await response.json();
      setCandidates(candidates.data);
      setShowLoader(false);
    } catch (error) {
      setShowLoader(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return {
    candidates,
    isError,
    showLoader,
  };
};

export default useCandidate;
