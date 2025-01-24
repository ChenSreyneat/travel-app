// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { register } from '@/app/actions'; // Ensure the path to 'actions' is correct

// export default function RegisterPage() {
//   const [error, setError] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);
//   const router = useRouter();

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError('');
//     setLoading(true);

//     const formData = new FormData(event.currentTarget);

//     try {
//       const result = await register(formData);

//       if (result?.error) {
//         setError(result.error);
//       } else {
//         router.push('/login');
//       }
//     } catch (err) {
//       setError('An unexpected error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Your Account</h1>
//         {error && (
//           <p className="text-red-500 text-center mb-4 bg-red-100 border border-red-300 py-2 px-4 rounded-md">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your full name"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email address"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Create a password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//               required
//               minLength={8} // Example client-side validation
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 font-semibold rounded-md text-white transition ${
//               loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>

//         <p className="mt-6 text-center text-gray-600">
//           Already have an account?{' '}
//           <a href="/login" className="text-blue-500 hover:underline">
//             Log in here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }
