import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import html2canvas from "html2canvas";
import JsPDF from "jspdf";
export default function LandingPage() {


  function captureScreenshot() {
    const element = document.getElementById("layout_con");
  
    const waitForImages = () => {
      return new Promise((resolve) => {
        const images = element.getElementsByTagName("img");
        let loadedImages = 0;
  
        const imageLoaded = () => {
          loadedImages++;
          if (loadedImages === images.length) {
            resolve();
          }
        };
  
        for (let i = 0; i < images.length; i++) {
          if (images[i].complete) {
            imageLoaded();
          } else {
            images[i].addEventListener("load", imageLoaded);
            images[i].addEventListener("error", imageLoaded);
          }
        }
        // Resolve immediately if there are no images
        if (images.length === 0) {
          resolve();
        }
      });
    };
  
    waitForImages().then(() => {
      html2canvas(element, {
        allowTaint: true,
        useCORS: true,
        onclone: (clonedDoc) => {
          const cloneElement = clonedDoc.getElementById("layout_con");
          // Manipulate the cloned element if necessary
        },
      }).then((canvas) => {
        const pngDataURL = canvas.toDataURL("image/png");
  
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;
  
        const pdf = new JsPDF("p", "px", [elementWidth, elementHeight]);
  
        pdf.addImage(pngDataURL, "PNG", 0, 0, elementWidth, elementHeight);
  
        const fileName = "Screenshot.pdf";
  
        pdf.save(fileName);
      });
    }).catch((error) => {
      console.error("Error capturing screenshot:", error);
      // Handle error if needed
    });
  }
  

 
  return (
    <div style={{overflow:"hidden" ,display:"flex" ,flexDirection:"column" ,minHeight:"100svh" }} id="layout_con">
<div>
<Header />
</div>
<div style={{flex:"1 0 auto" ,display:"block"}}>
<Main />
<button onClick={captureScreenshot}> Download</button>
</div>
<div style={{marginTop:"auto"}}>
<Footer />
</div>
    




    </div>
  )
}
