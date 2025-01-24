'use client';
import { useState } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../../page-tour/components/Pagination";
import {
  faTachometerAlt,
  faBook,
  faThLarge,
  faPlusSquare,
  faCommentDots,
  faSignOutAlt,
  faBell,
  faSearch,
  faCopy,
  faPen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function OwnerDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(""); // "Approve" or "Reject"
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAction = (type, booking) => {
    setPopupType(type);
    setSelectedBooking(booking);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupType("");
    setSelectedBooking(null);
  };

  return (
    <div className="flex w-full min-h-screen mx-auto bg-gray-50">
      {/* Sidebar */}
      <aside className="w-48 bg-white border-r overflow-y-auto">
        <div className="text-center py-4">
          <img
            src="/image/logo-edit.png"
            alt="logo"
            className="w-[150px] h-[150px] m-auto object-cover"
          />
        </div>
        <nav>
          <ul>
            <li>
              <Link href="#" className="flex items-center px-6 py-3 text-gray-700 hover:text-blue-500 mx-2">
                <FontAwesomeIcon icon={faTachometerAlt} className="text-lg w-5 h-5" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center px-6 py-3 text-blue-500 bg-blue-100 rounded-lg mx-2">
                <FontAwesomeIcon icon={faBook} className="text-lg w-5 h-5" />
                <span className="ml-3">Booking</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center px-6 py-3 text-gray-700 hover:text-blue-500 mx-2">
                <FontAwesomeIcon icon={faThLarge} className="text-lg w-5 h-5" />
                <span className="ml-3">Category</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center px-6 py-3 text-gray-700 hover:text-blue-500 mx-2">
                <FontAwesomeIcon icon={faPlusSquare} className="text-lg w-5 h-5" />
                <span className="ml-3">Add Package</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center px-6 py-3 text-gray-700 hover:text-blue-500 mx-2">
                <FontAwesomeIcon icon={faCommentDots} className="text-lg w-5 h-5" />
                <span className="ml-3">Feedback</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center px-6 py-3 text-gray-700 hover:text-blue-500 mx-2">
                <FontAwesomeIcon icon={faSignOutAlt} className="text-lg w-5 h-5" />
                <span className="ml-3">Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg w-96"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-[20px] h-[20px]"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <FontAwesomeIcon icon={faBell} className="text-gray-600 w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                MR
              </div>
              <div>
                <p className="text-sm font-medium">Moni Roy</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Bookings Table */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-700">Bookings</h2>
            <div className="flex items-center gap-4">
              <div className="relative ms-auto">
                <input
                  type="text"
                  placeholder="Search by tour name"
                  className="pl-10 pr-4 py-2 border rounded-lg w-96"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-[20px] h-[20px]"
                />
              </div>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="px-4 py-2">Guest Name</th>
                <th className="px-4 py-2">Tour name</th>
                <th className="px-4 py-2">Person</th>
                <th className="px-4 py-2">Order Date</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(7)].map((_, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-3">James Berny</td>
                  <td className="px-4 py-3">Trip of Cambodia</td>
                  <td className="px-4 py-3">3</td>
                  <td className="px-4 py-3">Oct 24th, 2020</td>
                  <td className="px-4 py-3">$125</td>
                  <td className="px-4 py-3">
                    <select
                      className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full"
                      onChange={(e) =>
                        handleAction(e.target.value, { id: i, name: "James Berny" })
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approve">Approve</option>
                      <option value="Reject">Reject</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="p-1 hover:text-blue-500">
                        <FontAwesomeIcon icon={faCopy} className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:text-blue-500">
                        <FontAwesomeIcon icon={faPen} className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

        {/* Popup */}
        {showPopup && selectedBooking && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                  {selectedBooking.name[0]}
                </div>
                <div className="ml-4">
                  <p className="text-lg font-bold text-gray-700">{selectedBooking.name}</p>
                  <p className="text-sm text-gray-500">Booking ID: {selectedBooking.id}</p>
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-700 mb-4">
                Do you want to this tenant?
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {popupType === "Approve"
                  ? "Please indicate the reason for the refusal below"
                  : "Please indicate the reason for the refusal below"}
              </p>
              <textarea
                className="w-full p-3 border rounded-lg mb-4"
                rows="4"
                placeholder={`Reason for ${popupType.toLowerCase()}`}
              ></textarea>
              <div className="flex justify-end gap-4">
                <button
                  onClick={closePopup}
                  className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={closePopup}
                  className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
