import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div style={{overflow:"hidden" ,display:"flex" ,flexDirection:"column" ,minHeight:"100svh" }}>
<div>
<Header />
</div>
<div style={{flex:"1 0 auto" ,display:"block"}}>
<Main />

</div>
<div style={{marginTop:"auto"}}>
<Footer />
</div>
    




    </div>
  )
}
