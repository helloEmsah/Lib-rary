import React from 'react'
import {ReactReader, EpubView, EpubViewStyle, ReactReaderStyle } from 'react-reader'
import book from '../../Dummy/JavaScript.epub'
function ReadBook(){
  return(
    <>
      <div style={{  height: "100%" }}>
        {" "}
        <ReactReader
          url={"https://epub.online-reader.com/view?f=9SGkj3"}
          title="Tsun Zu: The Art of War"
          
        />

      </div>
      </>
  )
}

export default ReadBook;
