import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

const verticals = ["Engineering", "Medical", "Business", "Arts", "Science"];
// const apiUrl = process.env.REACT_APP_API_URL;

export default function ReferModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    friendName: "",
    friendEmail: "",
    friendPhone: "",
    vertical: "",
    yourName: "",
    yourEmail: "",
    yourPhone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClose = () => {
    setFormData({
      friendName: "",
      friendEmail: "",
      friendPhone: "",
      vertical: "",
      yourName: "",
      yourEmail: "",
      yourPhone: "",
    });
    setStep(1);
    setShowSuccess(false);
    onClose();
  };
  const handleNext = (e) => {
    e.preventDefault();
    if (!/^[A-Za-z\s]+$/.test(formData.friendName)) {
      toast.error(
        "Friend's name cannot contain numbers or special characters.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
      return;
    }

     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailPattern.test(formData.friendEmail)) {
       toast.error("Invalid email format.", {
         position: "top-right",
         autoClose: 3000,
       });
       return;
     }

    if (!/^\d{10}$/.test(String(formData.friendPhone))) {
      toast.error("Friend's phone number must be exactly 10 digits.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    
    setStep(2);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

     if (!/^[A-Za-z\s]+$/.test(formData.yourName)) {
       toast.error("Your name cannot contain numbers or special characters.", {
         position: "top-right",
         autoClose: 3000,
       });
       return;
     }
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailPattern.test(formData.yourEmail)) {
       toast.error("Invalid email format.", {
         position: "top-right",
         autoClose: 3000,
       });
       return;
     }


     if (!/^\d{10}$/.test(formData.yourPhone)) {
       toast.error("Your phone number must be exactly 10 digits.", {
         position: "top-right",
         autoClose: 3000,
       });
       return;
     }

      
    if (formData.friendEmail === formData.yourEmail) {
      toast.error("You cannot refer yourself!", {
        position: "top-right",
        autoClose: 4000,
      });
      return;
    }
    try {
    const response = await fetch(
      `https://accredian-backend-task-4cwg.onrender.com/api/v1/referral/earnprogram`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log("Referral successful:", data);
      setShowSuccess(true);
      
      setTimeout(() => {
        handleClose();
      }, 2000);
    } else {
      console.error("Referral failed:", data.error);
      toast.error(data.error, {
        position: "top-right",
        autoClose: 4000,
      });
    }
  } catch (error) {
    console.error("Error:", error);

    toast.error("Something went wrong. Please try again.", {
      position: "top-right",
      autoClose: 4000,
    });
  }
  };

  return (
    <>
      <ToastContainer />
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-4"
              >
                <Dialog.Panel className="relative transform rounded-xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full max-w-lg sm:p-6">
                  <div>
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                      <Dialog.Title
                        as="h3"
                        className="text-xl sm:text-2xl font-semibold leading-6 text-gray-900"
                      >
                        Refer your friend!
                      </Dialog.Title>
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-500 transition-colors"
                        onClick={handleClose}
                      >
                        <span className="sr-only">Close</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                      <div className="w-full sm:w-1/2">
                        <div className="relative">
                          <img
                            src="https://img.freepik.com/free-vector/sharing-content-concept-illustration_114360-5441.jpg"
                            alt="Referral illustration"
                            className="w-full h-auto rounded-lg shadow-md"
                          />
                          <div className="absolute -bottom-3 -right-3 bg-white rounded-lg shadow-md p-3">
                            <div className="text-sm font-medium text-indigo-600">
                              Earn ₹1000
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full sm:w-1/2">
                        <div className="mb-4">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-4 h-4 rounded-full ${
                                step === 1 ? "bg-indigo-600" : "bg-gray-300"
                              }`}
                            ></div>
                            <div className="h-0.5 flex-1 bg-gray-200"></div>
                            <div
                              className={`w-4 h-4 rounded-full ${
                                step === 2 ? "bg-indigo-600" : "bg-gray-300"
                              }`}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-gray-500">
                              Friend's Details
                            </span>
                            <span className="text-xs text-gray-500">
                              Your Details
                            </span>
                          </div>
                        </div>

                        {step === 1 ? (
                          <form onSubmit={handleNext} className="space-y-4">
                            <div>
                              <label
                                htmlFor="friendName"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Enter friend's name
                              </label>
                              <input
                                type="text"
                                name="friendName"
                                id="friendName"
                                required
                                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors"
                                value={formData.friendName}
                                onChange={handleInputChange}
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="friendEmail"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Enter friend's email
                              </label>
                              <input
                                type="text"
                                name="friendEmail"
                                id="friendEmail"
                                required
                                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors"
                                value={formData.friendEmail}
                                onChange={handleInputChange}
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="friendPhone"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Friend's phone number
                              </label>
                              <div className="mt-1 flex rounded-lg border border-gray-300 overflow-hidden">
                                <span className="inline-flex items-center px-3 bg-gray-50 text-gray-500 border-r border-gray-300">
                                  +91
                                </span>
                                <input
                                  type="text"
                                  name="friendPhone"
                                  id="friendPhone"
                                  required
                                  className="block w-full px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors border-0"
                                  value={formData.friendPhone}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="vertical"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Select vertical
                              </label>
                              <select
                                name="vertical"
                                id="vertical"
                                required
                                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors"
                                value={formData.vertical}
                                onChange={handleInputChange}
                              >
                                <option value="">Select a vertical</option>
                                {verticals.map((vertical) => (
                                  <option key={vertical} value={vertical}>
                                    {vertical}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <button
                              type="submit"
                              className="w-full rounded-lg bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 transform hover:scale-105"
                            >
                              Next
                            </button>
                          </form>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                              <label
                                htmlFor="yourName"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Enter your name
                              </label>
                              <input
                                type="text"
                                name="yourName"
                                id="yourName"
                                required
                                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors"
                                value={formData.yourName}
                                onChange={handleInputChange}
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="yourEmail"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Enter your email
                              </label>
                              <input
                                type="text"
                                name="yourEmail"
                                id="yourEmail"
                                required
                                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors"
                                value={formData.yourEmail}
                                onChange={handleInputChange}
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="yourPhone"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Your phone number
                              </label>
                              <div className="mt-1 flex rounded-lg border border-gray-300 overflow-hidden">
                                <span className="inline-flex items-center px-3 bg-gray-50 text-gray-500 border-r border-gray-300">
                                  +91
                                </span>
                                <input
                                  type="text"
                                  name="yourPhone"
                                  id="yourPhone"
                                  required
                                  className="block w-full px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors border-0"
                                  value={formData.yourPhone}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>

                            <button
                              type="submit"
                              className="w-full rounded-lg bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 transform hover:scale-105"
                            >
                              Refer Now
                            </button>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>


      <Transition.Root show={showSuccess} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-4"
              >
                <Dialog.Panel className="relative transform rounded-xl bg-white p-6 text-center shadow-xl transition-all max-w-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900 mb-2"
                  >
                    Successfully Referred!
                  </Dialog.Title>
                  <p className="text-sm text-gray-500">
                    Your friend will receive an invitation shortly. Thank you
                    for referring!
                  </p>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
