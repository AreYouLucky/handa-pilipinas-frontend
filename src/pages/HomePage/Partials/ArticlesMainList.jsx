import ArticlesList from "./ArticlesList";
function ArticlesMainList() {
  return (
    <section>
      <div className="mx-auto grid max-w-screen-2xl py-4 text-gray-50 md:grid-cols-3 md:gap-x-20 md:py-12 md:pb-1">
        <div className="group relative flex items-center overflow-hidden rounded-xl p-5 md:col-span-2 md:p-0 md:pr-10">
          <div className="relative z-10 w-full flex-none text-gray-700">
            <div className="inline-flex items-center gap-x-2 rounded-full border border-gray-400 p-1 pr-6 text-sm font-medium duration-150">
              <span className="inline-block rounded-full bg-[#FFCC49] px-3 py-1 font-bold text-gray-900">
                Latest News
              </span>
              <p className="flex items-center font-bold">29 January 2025</p>
            </div>
            <div className="w-full px-3">
              <h1 className="acklin-font spacing- text-xl text-gray-700 md:text-4xl">
                $500 Million ADB Loan to Bolster Philippines’ Disaster
                Resilience
              </h1>
              <p className="montserrat-regular mb-4 text-justify text-gray-600">
                MANILA, PHILIPPINES (29 January 2025) — The Asian Development
                Bank (ADB) has approved a $500 million policy-based loan to
                provide the Philippines with quick access to financing in case
                of disasters triggered by natural hazards or health-related
                emergencies...
              </p>
              <div></div>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <span className="montserrat-bold flex cursor-pointer items-center justify-center gap-x-1 rounded-full border border-white bg-[#262626] px-4 py-2 text-base font-medium text-white duration-150 hover:bg-gray-900 md:inline-flex">
                  Read Article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 block w-full border-b md:hidden"></div>
        <div>
          <ArticlesList></ArticlesList>
        </div>
      </div>
    </section>
  );
}

export default ArticlesMainList;
