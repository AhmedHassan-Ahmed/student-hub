const PageMainHeader = ({
  title,
  description,
  breadcrumb = "Dashboard",
  currentPage,
  children,
}) => {
  return (
    <div className="border-b border-gray-200 bg-white px-7 md:px-8 py-5">
      <div className="flex items-center text-xs font-semibold uppercase tracking-wide text-gray-500">
        <a href="#" className="hover:text-gray-700">
          {breadcrumb}
        </a>

        <span className="mx-2 text-gray-400">/</span>

        <a href="#" className="text-blue-600 hover:text-blue-700">
          {currentPage}
        </a>
      </div>

      <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-serif text-5xl font-bold text-gray-900">
            {title}
          </h1>

          <p className="mt-2 text-lg text-gray-600">{description}</p>
        </div>

        <div className="flex items-center gap-3">{children}</div>
      </div>
    </div>
  );
};

export default PageMainHeader;
