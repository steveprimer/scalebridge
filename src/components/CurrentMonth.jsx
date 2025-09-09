import React from "react";

/**
 * A component that displays the current month's full name.
 * It automatically calculates the month, so no manual updates are needed.
 */
const CurrentMonth = () => {
  // Create a new Date object to get the current date
  const now = new Date();

  // Format the date to get the full name of the month (e.g., "September")
  const month = now.toLocaleString("default", { month: "long" });

  // Return the month name. We use a React Fragment (<>) as a wrapper.
  return <>{month}</>;
};

export default CurrentMonth;
