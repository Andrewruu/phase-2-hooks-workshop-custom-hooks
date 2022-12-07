import { useEffect, useState } from "react";

/* ✅ create a new function called useDocumentTitle */
/* 👀 export function useDocumentTitle() {} */

export function useDocumentTitle(title){
  useEffect(() => {
    document.title = title;
  }, [title]);

}

export default function Home() {
  /* 
    ✅ move the useEffect code into your useDocumentTitle function
   then, call the useDocumentTitle hook in your component
  */
 const [title, setTitle] = useState("Welcome to the home page!")
 useDocumentTitle(title)

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        To see the title change in the browser tab, click the 'Open in new tab'
        link above
      </p>
    </div>
  );
}
