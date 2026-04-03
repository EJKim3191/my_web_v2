import styled, { css, keyframes } from "styled-components";
import pixelDot from "../../img/pixelImg/ui/pixelDot.svg";

const fadeBackdrop = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fillBar = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const DOT_SIZE = "8px";

const dotTile = css`
  background-image: url(${pixelDot});
  background-repeat: repeat;
  background-size: ${DOT_SIZE} ${DOT_SIZE};
  image-rendering: pixelated;
  image-rendering: crisp-edges;
`;

export const LoaderBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(15, 18, 22, 0.62);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  animation: ${fadeBackdrop} 0.38s ease forwards;
`;

export const LoaderInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  min-width: 0;
  max-width: min(320px, 88vw);
  width: 100%;
`;

export const DotBarShell = styled.div`
  width: 100%;
  padding: 2px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.35);
  border: 2px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
`;

export const DotBarTrack = styled.div`
  position: relative;
  width: 100%;
  height: 12px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    ${dotTile}
    opacity: 0.42;
    pointer-events: none;
  }
`;

export const DotBarFill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  ${dotTile}
  filter: brightness(1.55) saturate(1.35) hue-rotate(155deg);
  box-shadow: 0 0 12px rgba(77, 208, 225, 0.35);
  transform-origin: left center;
  width: ${({ $progress }) =>
    typeof $progress === "number" ? `${Math.min(100, Math.max(0, $progress))}%` : "0%"};
  ${({ $indeterminate }) =>
    $indeterminate &&
    css`
      animation: ${fillBar} 2.1s ease-in-out infinite;
    `}
`;

export const LoaderLabel = styled.span`
  font-family: system-ui, -apple-system, Segoe UI, sans-serif;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.78);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
`;
