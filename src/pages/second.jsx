import {NavLink} from "react-router-dom";
import {DotLottieReact} from '@lottiefiles/dotlottie-react'
const SecondPage=()=> {
  return(<div   className='secondPage'>
          <h1 className="zoom-fade"> Happy Birthday </h1>
          <div
              style={{position: 'absolute', left: 0, top: 100, width: '50vw'}}>

              <DotLottieReact

                  src="https://lottie.host/ce773d37-c991-4054-8753-911892ed3985/EoBff4FCht.lottie"
                  loop
                  autoplay
              />
          </div>

          <div style={{position: 'absolute', left: 0, top: 500, width: '50vw'}}>
              <DotLottieReact
                  src="https://lottie.host/ce773d37-c991-4054-8753-911892ed3985/EoBff4FCht.lottie"
                  loop
                  autoplay
              />
          </div>

          <div style={{position: 'absolute', right: 0, top: 100, width: '50vw'}}>
              <DotLottieReact
                  src="https://lottie.host/ce773d37-c991-4054-8753-911892ed3985/EoBff4FCht.lottie"
                  loop
                  autoplay
              />
          </div>

          <div style={{position: 'absolute', right: 0, top: 500, width: '50vw'}}>
              <DotLottieReact
                  src="https://lottie.host/ce773d37-c991-4054-8753-911892ed3985/EoBff4FCht.lottie"
                  loop
                  autoplay
              />
          </div>

          <DotLottieReact style={{
              width: '75vw!important',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)'
          }}
                          src="https://lottie.host/d4779770-0b9a-4f75-beb9-411724887c53/vg6trqc4r2.lottie"
                          loop
                          autoplay
          />
      </div>
  )
}

export default SecondPage