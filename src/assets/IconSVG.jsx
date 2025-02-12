export const SeatRegular = ({ size = 6, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`w-${size} h-${size} text-${color}`}
    >
      <path
        fill="currentColor"
        d="M19.75 12.75c.967-3.884 1.396-5.903.384-7.322a4 4 0 0 0-.215-.275C18.722 3.75 16.481 3.75 12 3.75s-6.72 0-7.918 1.403q-.114.133-.215.275c-1.012 1.42-.583 3.438.384 7.322zm-15 5v2a.75.75 0 0 1-1.5 0v-2.145A2 2 0 0 1 4 13.75h16a2 2 0 0 1 .75 3.855v2.145a.75.75 0 0 1-1.5 0v-2z"
      />
    </svg>
  );
};

export const SeatVip = ({ size = 6, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`w-${size} h-${size} text-${color}`}
    >
      <path
        fill="%23000"
        d="M5 9.15V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2.16c-1.16.41-2 1.51-2 2.81V14H7v-2.04c0-1.29-.84-2.4-2-2.81M20 10c-1.1 0-2 .9-2 2v3H6v-3a2 2 0 1 0-4 0v5c0 1.1.9 2 2 2v2h2v-2h12v2h2v-2c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2"
      />
    </svg>
  );
};
