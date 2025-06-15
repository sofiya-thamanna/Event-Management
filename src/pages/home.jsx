import React from 'react'

const home = () => {
  return (
  <div className="bg-white py-16 sm:py-6">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Welcome to Planora
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Discover, create, and manage amazing events. Connect with like-minded people and make memories that last.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Browse Current Events
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          View Past Events <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
    <div class="p-4 bg-white rounded-lg shadow-sm text-sm max-w-80">
    <img class="rounded-md max-h-40 w-full object-cover" src="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400" alt="officeImage" />
    <p class="text-gray-900 text-xl font-semibold ml-2 mt-2">Summer Tech Event</p>
    <p class="text-gray-500 mt-3 ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..</p>
    <button type="button" class="bg-indigo-500 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white">View Details</button>
</div>
  </div>
</div>
  )
}

export default home