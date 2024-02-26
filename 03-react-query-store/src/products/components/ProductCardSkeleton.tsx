import { ScrollToTop } from "../../shared/components/ScrollToTop";

export function ProductCardSkeleton() {
  return (
    <div className="w-full flex-col animate-pulse">
      <ScrollToTop />

      <h1 className="text-2xl font-bold text-center mb-4">Product</h1>

      <div className="relative flex flex-col justify-between md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 w-full md:max-w-3xl h-full mx-auto border border-white bg-white">
        <div className="w-full h-80 sm:h-60 md:w-1/3 md:h-full grid place-items-center rounded-xl p-5 sm:p-0 ">
          <div className="w-3/4 h-full md:h-3/4 bg-gray-200 rounded-lg"></div>
        </div>

        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="w-2/4 h-4 bg-gray-200 rounded-lg hidden md:block"></div>
          <div className="w-3/4 h-6 bg-gray-200 rounded-lg"></div>
          <div className="w-full h-16 bg-gray-200 rounded-lg"></div>
          <div className="w-1/2 h-6 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
