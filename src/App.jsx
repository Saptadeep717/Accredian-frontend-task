import { useState } from "react";
import ReferModal from "./components/ReferModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative isolate px-4 sm:px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl py-12 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left px-4 sm:px-6 lg:px-0">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Share & Earn Amazing Rewards
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600">
                Invite your friends to join our learning community and earn
                exciting rewards. Get ₹1000 for every successful referral!
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:justify-start justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 transform hover:scale-105"
                >
                  Refer Now
                </button>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Earn up to ₹10,000 per month</span>
                </div>
              </div>

              <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="rounded-full bg-indigo-100 p-3 mb-3">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Invite Friends
                  </h3>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="rounded-full bg-indigo-100 p-3 mb-3">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">They Enroll</h3>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="rounded-full bg-indigo-100 p-3 mb-3">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">You Earn</h3>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <img
                src="https://img.freepik.com/free-vector/mobile-marketing-concept-illustration_114360-1497.jpg"
                alt="Referral Program"
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://randomuser.me/api/portraits/women/1.jpg"
                      alt="User"
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="User"
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      alt="User"
                    />
                  </div>
                  <span className="text-sm text-gray-600">
                    1000+ successful referrals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      <ReferModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
