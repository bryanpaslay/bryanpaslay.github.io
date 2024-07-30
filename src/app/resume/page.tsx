

"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import debounce from 'lodash.debounce';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      const debounceUpdateSize = debounce(() => {
        let header = document.getElementById("header");
        setSize([window.innerWidth, window.innerHeight - header.offsetHeight]);
      }, 50);
      window.addEventListener('resize', debounceUpdateSize);
      debounceUpdateSize();
      return () => window.removeEventListener('resize', debounceUpdateSize);
    });
    return size;
  }

export default function(){

    const [width, height] = useWindowSize();

    return <object id='resumeViewer' data="/BryanPaslayResume.pdf" type="application/pdf" width="100%" height={height}>
        <p>unable to view bryan's resume?</p><a href="/BryanPaslayResume.pdf">Click this link</a>
    </object>;
}