import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
function RootLayout() {

  return (
    <>
    <section>
      <Outlet/>
    </section>
    </>
  )
}

export default RootLayout