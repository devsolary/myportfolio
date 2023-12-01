import React from 'react'
import "./Services.css"

function Service() {
  return (
    <div className='servicesWrapper'>
      <h1>SERVICES</h1>
        <section>
            <h3>Front-end Development</h3>
            <p>
              I specialize in crafting engaging and responsive user interface using cutting-edge technologies such as HTML, CSS, Javascript,Typescript, Reactjs, Nextjs, Angular. My focus is to create seamless and visuial appealing experience for users across all devices.
            </p>
        </section>
        <section className='sideSer'>
            <h3>Mobile App Development</h3>
            <p>
              As a mobile app developer, I excel in both Andriod (using java) and iOS (using swift) app development. I leverage cross-platform with flutterwave framework and C++ to ensure apps reach a broad audiennce with consistent quality.
            </p>
        </section>
        <section>
            <h3>UI/UX Design</h3>
            <p>
              My UI/UX desigb expertise focuses on creating intuitive and visual appealing intertfaces.
            </p>
        </section>
        <section className='sideSer'>
            <h3>Consulting and technical support</h3>
            <p>
              Offering guidance and technical assistance service for hardware and software issues.
            </p>
        </section>
        <section>
            <h3>Hardware Design and Development</h3>
            <p>
              I am experience in the meticulous craft of hardware design and development. From conceptualization to realization, i bring expertise i creating robust and efficient hardware components that meet the demands of modern technology.
            </p>
        </section>
    </div>
  )
}

export default Service