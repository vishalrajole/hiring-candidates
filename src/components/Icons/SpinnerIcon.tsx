import React from "react";
import styled from "styled-components";

export interface SpinnerProps {
  className?: string;
}
const Spinner = ({ className }: SpinnerProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={className}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="10"
        r="25"
        strokeDasharray="117.80972450961724 41.269908169872416"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="2.8571428571428568s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
};

export const SpinnerIcon = styled(Spinner)`
  display: flex;
  width: 80px;
  height: 80px;
  margin: ${(props) => props.theme.spacing.xl} auto;
`;
