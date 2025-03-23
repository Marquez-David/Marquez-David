
/**
 * Card component that displays a title, date, description, and an action button.
 * @param {string} title - The title to display on the card.
 * @param {string} date - The date to display on the card.
 * @param {string} description - The description text to display on the card.
 * @param {Function} action - The callback function to execute when the card is clicked.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = ({ title, date, description, action }) => (
  <button onClick={action}>
    <div class="flex flex-row mb-1 w-[350px] items-center">
      <h3 class="text-lg font-semibold text-yellow-600">
        {title}
      </h3>
      <time class="block text-sm leading-none text-white/80 ml-auto">
        {date}
      </time>
    </div>
    <p class="text-base text-white/80 text-left">
      {description}
    </p>
  </button>
);

export default Card;