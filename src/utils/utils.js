/**
 * Calculates the number of full years of experience based on a given start date.
 * @param {string|Date} startDate - The start date of the experience, either as a string or a Date object.
 * @returns {number} The number of full years of experience.
 */
export const calculateExperienceYears = (startDate) => {
  const start = new Date(startDate);
  const end = new Date();
  const diff = end - start;
  const years = diff / 31536000000;
  return Math.floor(years);
}