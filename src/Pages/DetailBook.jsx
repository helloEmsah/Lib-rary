import React from 'react'
import {ReactReader} from 'react-reader'
import {Link} from 'react-router-dom'
import Reader from './test'

function DetailBook(){
  return(
    <>
    <div>
      <h1>This is detail book</h1>
  <button><Link to ='https://www.bookrix.com/book.html?bookID=albiorix_1319027101.9768350124'>Read</Link></button>
  <Reader/>
    </div>
</>
  )
}

export default DetailBook
