const SearchIcon = ({ className }) => {
  return (
    <svg
      className={`w-[24px] h-[24px] cursor-pointer stroke-gray-900 dark:stroke-white hover:stroke-gray-700 dark:hover:stroke-gray-300 transition-colors ${className}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export default SearchIcon;
