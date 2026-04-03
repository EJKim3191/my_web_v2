/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  LoaderBackdrop,
  LoaderInner,
  DotBarShell,
  DotBarTrack,
  DotBarFill,
  LoaderLabel,
} from "./styles";

/**
 * @param {object} props
 * @param {boolean} [props.open=true] - 표시 여부
 * @param {number} [props.progress] - 0~100 고정 진행률. 없으면 0→100% 반복 애니메이션
 * @param {string} [props.label] - 바 아래 보조 텍스트
 */
function Loader({ open = true, progress, label }) {
  if (!open) {
    return null;
  }

  const indeterminate = typeof progress !== "number";
  const labelText =
    label ??
    (indeterminate
      ? "Loading…"
      : `${Math.round(Math.min(100, Math.max(0, progress)))}%`);

  return (
    <LoaderBackdrop role="presentation" aria-busy="true" aria-live="polite">
      <LoaderInner>
        <DotBarShell>
          <DotBarTrack aria-hidden="true">
            <DotBarFill
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={indeterminate ? undefined : Math.round(progress)}
              aria-valuetext={
                indeterminate ? "Loading" : `${Math.round(progress)} percent`
              }
              $progress={indeterminate ? undefined : progress}
              $indeterminate={indeterminate}
            />
          </DotBarTrack>
        </DotBarShell>
        {labelText ? <LoaderLabel>{labelText}</LoaderLabel> : null}
      </LoaderInner>
    </LoaderBackdrop>
  );
}

export default Loader;
