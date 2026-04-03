/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
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
 * @param {boolean} [props.multiLine=false] - true이고 `labels`가 있으면 라벨 순환 (숫자 progress면 100% 도달 시, progress 생략 시 바 애니메이션 한 사이클마다)
 * @param {string[]} [props.labels] - multiLine일 때 순환할 문구 목록
 * @param {number} [props.fillsPerLabel=1] - “한 바퀴”(100% 또는 indeterminate 애니메이션 1회)가 이 횟수만큼 쌓일 때마다 다음 라벨로 이동
 */
function Loader({
  open = true,
  progress,
  label,
  multiLine = false,
  labels,
  fillsPerLabel = 1,
}) {
  const [completionCount, setCompletionCount] = useState(0);
  const prevProgressRef = useRef(undefined);

  const indeterminate = typeof progress !== "number";
  const labelListOk =
    multiLine &&
    Array.isArray(labels) &&
    labels.length > 0 &&
    fillsPerLabel > 0;
  const useMultiLabelsControlled = labelListOk && typeof progress === "number";
  const useMultiLabelsIndeterminate = labelListOk && indeterminate;
  const useMultiLabels = useMultiLabelsControlled || useMultiLabelsIndeterminate;

  const labelsKey = Array.isArray(labels) ? labels.join("\0") : "";

  useEffect(() => {
    if (!open) {
      return;
    }
    setCompletionCount(0);
    prevProgressRef.current = undefined;
  }, [open, labelsKey]);

  useEffect(() => {
    if (!open || !useMultiLabelsControlled) {
      return;
    }
    const prev = prevProgressRef.current;
    prevProgressRef.current = progress;
    if (prev !== undefined && prev < 100 && progress >= 100) {
      setCompletionCount((c) => c + 1);
    }
  }, [open, progress, useMultiLabelsControlled]);

  const handleBarAnimationIteration = useMultiLabelsIndeterminate
    ? () => setCompletionCount((c) => c + 1)
    : undefined;

  if (!open) {
    return null;
  }

  const multiLabelIndex = useMultiLabels
    ? Math.floor(completionCount / fillsPerLabel) % labels.length
    : 0;

  const labelText = useMultiLabels
    ? labels[multiLabelIndex]
    : (label ??
      (indeterminate
        ? "Loading…"
        : `${Math.round(Math.min(100, Math.max(0, progress)))}%`));

  const ariaValueText = indeterminate
    ? useMultiLabels && labelText
      ? `${labelText}, loading`
      : "Loading"
    : useMultiLabels
      ? `${labelText}, ${Math.round(progress)} percent`
      : `${Math.round(progress)} percent`;

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
              aria-valuetext={ariaValueText}
              $progress={indeterminate ? undefined : progress}
              $indeterminate={indeterminate}
              onAnimationIteration={handleBarAnimationIteration}
            />
          </DotBarTrack>
        </DotBarShell>
        {labelText ? <LoaderLabel>{labelText}</LoaderLabel> : null}
      </LoaderInner>
    </LoaderBackdrop>
  );
}

export default Loader;
