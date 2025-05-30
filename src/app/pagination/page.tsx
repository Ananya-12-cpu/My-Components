


import React from 'react'
import { PaginationService } from '../service/pagnationService'
import TablePage from './RenderTable'

async function page() {
const user= await PaginationService.getUser()

  return (
    <>
    <TablePage  user={user.data}/>
    
    </>
  )
}

export default page