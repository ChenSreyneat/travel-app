'use client'
import { useState } from "react";
import Link from 'next/link'; // Add the Link import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../page-tour/components/Pagination";
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
} from "@fortawesome/free-solid-svg-icons";
import { Calendar } from "../../ui/Calendar"; // Make sure the Calendar component exists

export default function OwnerDashboard() {
  const [currentPage, setCurrentPage] = useState(1); // Initialize useState
  const totalPages = 10; // Example, you can set this dynamically

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
              <Link href="#" className="flex items-center px-6 py-3 text-blue-500 bg-blue-100 rounded-lg mx-2">
                <FontAwesomeIcon icon={faTachometerAlt} className="text-lg w-5 h-5" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center px-6 py-3 text-gray-700 hover:text-blue-500 mx-2">
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

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-700">40,689</h2>
                <p className="text-sm text-gray-500">Total Bookings</p>
              </div>
              <div className="text-2xl">👥</div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-700">2040</h2>
                <p className="text-sm text-gray-500">Total Pending Bookings</p>
              </div>
              <div className="text-2xl">⏳</div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-700">10293</h2>
                <p className="text-sm text-gray-500">Total Active Tour</p>
              </div>
              <div className="text-2xl">📦</div>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-700">Bookings</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
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
              <select className="px-4 py-2 border rounded-lg text-sm">
                <option>Newest</option>
                <option>Oldest</option>
              </select>
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
                  <td className="px-4 py-3">125</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                      Pending
                    </span>
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
          {/* Pagination Component */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 bg-white border-l overflow-y-auto">
        {/* Calendar Placeholder */}
        <div className="rounded-lg p-4 mb-6">
          <Calendar />
        </div>

        {/* Upcoming Trips */}
        <div>
          <div className="flex items-center justify-between mb-4 ps-3">
            <h3 className="font-semibold">Upcoming Trip</h3>
            <button className="w-6 h-6 text-blue-500 hover:bg-blue-50 rounded-full flex items-center justify-center">
              +
            </button>
          </div>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-10%20130212-I857rlGpiw3KfgybXzNe2qWKUXoLOQ.png"
                alt="Trip"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <div className="font-medium">Seoul, South Korea</div>
                <div className="text-sm text-gray-500">Completed Trip</div>
                <div className="text-xs text-gray-400">25+ 3k usd</div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
