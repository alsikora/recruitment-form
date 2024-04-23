import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from './assets/react.svg'

function App(): React.ReactElement {

  return (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="Your Company"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl py-12 px-2 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <Outlet/>
            </div>
          </div>
        </div>
      </>
  )
}

export default App
