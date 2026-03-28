
import Image from 'next/image';
import CharityImg from '@/public/images/charities.png'

import { Footer, Navbar } from '@/components';

export default function DonateHours() {
  return (
    <>
      <Navbar />
      <div className='container' style={{padding: "8rem 0"}}>
        <h1 style={{textAlign: "center"}}>Towards a Healthy Planet</h1>
        <Image 
          alt="Image show pledge to charities"
          src={CharityImg}
          style={{
            maxWidth: "50%",
            height: "auto",
            display: "block",
            margin: "2rem auto"
            }}
          />
        
        <p style={{
          maxWidth: '540px',
          textAlign: "center",
          margin: "1.5rem auto",
          display: "block",
          color: "var(--green-800)",
          fontWeight: "550",
          padding: "clamp(15px, 4vw, 2rem)"

        }}>
          Donate your session hours to vetted mental health charities. Your time can make a difference in someone&apos;s healing journey.
        </p>
      </div> 
      <Footer />
    </>
  )
}