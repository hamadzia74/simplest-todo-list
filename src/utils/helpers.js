import React from "react";
import { useLocation } from "react-router-dom";
import TAG_COLORS from "./colorsTag";

export const handleMultipleCheck = (event, values) => {
  let checked = values;

  if (event.target.checked) {
    checked = [...checked, event.target.value];
  } else {
    checked.splice(checked.indexOf(event.target.value), 1);
  }
  return checked;
};

export const checkPastDate = (date) => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return date < today;
};

export const getColorsTagClass = (tag) => {
  const tagColor = TAG_COLORS.find(
    (item) => item.name.toLowerCase() === tag.toLowerCase()
  );
  return tagColor?.colorClass || "most-least-assets";
};

export function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
