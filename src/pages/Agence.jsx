import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

    gsap.registerPlugin(ScrollTrigger)

    const imageDivRef = useRef(null)
    const imageRef = useRef(null)

    const imageArray=[
        'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    ]

    useGSAP(function(){

        gsap.to(imageDivRef.current,{
            scrollTrigger:{
                trigger: imageDivRef.current,
                start: 'top 28%',
                end: 'top -70%',
                pin: true,
                pinSpacing: true,
                pinReparent: true,
                pinType: 'transform',
                scrub: 1, // smooth scrubbing with 1s easing
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate:(elem)=>{
                    let imageIndex;
                    if(elem.progress<1){
                      imageIndex=Math.floor(elem.progress * imageArray.length)
                    }else{
                        imageIndex = imageArray.length-1
                    }
                    imageRef.current.src = imageArray[imageIndex]
                }
            }
        })
    })
  return (
    <div>
        <div className='section1 relative py-1'>
        <div ref = {imageDivRef} className='absolute lg:h-[20vw] h-[40vw] lg:rounded-2xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-20 -top-80 overflow-hidden lg:left-[30vw] left-[20vw]'>
            <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className='relative font-font[2]'> 
        <div className='lg:mt-[50vh] mt-[30vh]'>
            <h1 className='text-[14vw] text-center uppercase leading-[15vw]'>Sounds sleek <br/>
             creative</h1>
        </div>
        <div className='lg:pl-[40%] lg:mt-20 mt-20 lg:p-3 p-1'>
            <p className='lg:text-2xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our curiosity fuels our creativity.
               We stay humble and say no to big egos — even yours.
               A brand is alive. It has values, a personality, and a story.
               Forget that, and you might get good short-term results, but you’ll kill it in the long run.
               That’s why we’re committed to bringing perspective — to build brands that truly influence.
            </p>
        </div>
    </div>
        </div>
        <div className='section2 h-screen'>

        </div>
    </div>
  )
}

export default Agence