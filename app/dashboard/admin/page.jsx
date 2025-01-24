'use client'
import { useState } from "react";
import Link from 'next/link';
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

export default function AdminDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [bookings, setBookings] = useState([
    { id: '#12312', userName: 'Nacho Varga', tourName: 'Adventure Trip', tourRating: 4.5, status: 'Booked', bookedDate: '2025-02-19' },
    { id: '#45635', userName: 'Lalo Salamanca', tourName: 'Relaxation Getaway', tourRating: 4.2, status: 'Booked', bookedDate: '2025-02-19' },
    { id: '#53224', userName: 'Pablo Escobar', tourName: 'Historical Tour', tourRating: 4.8, status: 'Booked', bookedDate: '2025-02-19' },
    { id: '#13242', userName: 'Jesse Pinkman', tourName: 'Adventure Trip', tourRating: 4.0, status: 'Booked', bookedDate: '2025-02-19' },
    { id: '#12341', userName: 'Jimmy McGill', tourName: 'Relaxation Getaway', tourRating: 3.9, status: 'Cancel', bookedDate: '2025-02-20' },
    { id: '#17534', userName: 'Gus Fring', tourName: 'Historical Tour', tourRating: 4.7, status: 'Booked', bookedDate: '2025-02-20' },
  ]);

  const toggleStatus = (id) => {
    setBookings(bookings.map(booking =>
      booking.id === id
        ? { ...booking, status: booking.status === 'Booked' ? 'Cancel' : 'Booked' }
        : booking
    ));
  };

  return (
    <div className="flex w-full min-h-screen mx-auto bg-gray-50">
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

      <main className="flex-1 p-6 overflow-y-auto">
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

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-700">40,689</h2>
                <p className="text-sm text-gray-500">Total User</p>
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
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">User Name</th>
                <th className="px-4 py-2">Tour Name</th>
                <th className="px-4 py-2">Tour Rating</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Booked Date</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-3">{booking.id}</td>
                  <td className="px-4 py-3">{booking.userName}</td>
                  <td className="px-4 py-3">{booking.tourName}</td>
                  <td className="px-4 py-3">{booking.tourRating}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleStatus(booking.id)}
                      className={`px-3 py-1 text-xs rounded-full ${
                        booking.status === 'Booked'
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-red-100 text-red-700 hover:bg-red-200'
                      }`}
                    >
                      {booking.status}
                    </button>
                  </td>
                  <td className="px-4 py-3">{booking.bookedDate}</td>
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
      </main>
    </div>
  );
}