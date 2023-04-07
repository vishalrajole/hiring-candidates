import { useEffect, useState } from "react";
import { UpIcon } from "../Icons/UpIcon";
import { DownIcon } from "../Icons/DownIcon";
// import { sortBy } from "../../utils/sort";

import * as S from "./styles";

interface Heading {
  label: string;
  key: string;
  sortable: boolean;
}

interface Item {
  label: string;
  id: string;
}

interface TableProps {
  headings: Array<Heading>;
  items: Array<any>;
  onSort: (columnName: string, direction: string) => void;
}

const Table = ({ headings, items, onSort }: TableProps) => {
  const [sortDirection, setSortDirection] = useState<string>("");

  const onSortClick = (key: string) => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    onSort(key, sortDirection);
  };

  return (
    <S.Table>
      <thead>
        <tr>
          {headings.map((heading: Heading) => {
            return (
              <S.TableHeading
                key={heading.label}
                {...(heading.sortable && {
                  onClick: () => onSortClick(heading.key),
                })}
              >
                {heading.label}
                {heading.sortable && sortDirection ? (
                  sortDirection === "asc" ? (
                    <DownIcon />
                  ) : (
                    <UpIcon />
                  )
                ) : null}
              </S.TableHeading>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {items.map((item: any) => {
          return (
            <tr key={item.id}>
              {headings.map(({ key }) => {
                return <S.TableData key={key}>{item[key]}</S.TableData>;
              })}
            </tr>
          );
        })}
      </tbody>
    </S.Table>
  );
};

export default Table;
