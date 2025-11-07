import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
    image2: 'https://cdn.pixabay.com/photo/2024/01/19/13/27/castle-8519077_1280.jpg'
  }, {
    image1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
    image2: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479'
  },{
    image1: 'https://cdn.pixabay.com/photo/2024/09/29/17/02/japan-contest-9083822_1280.jpg',
    image2: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47'
  }, {
    image1: 'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
    image2: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda'
  }, {
    image1: 'https://k72.ca/images/caseStudies/OSM/thumbnail_OSM_1280.jpg?w=1280&h=960&s=968b0d5b6e3ac3b7ab84c1706efd4377',
    image2: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14'
  },{
    image1: 'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124',
    image2: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757'
  }, {
    image1: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000',
    image2: 'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821'
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.utils.toArray('.hero').forEach((section) => {
      // ✨ fade & slide in
      gsap.fromTo(
        section,
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 40%",
            scrub: false,
          },
        }
      )

      // 🎥 Zoom-in effect for both images
      const images = section.querySelectorAll('.zoom-img')

      gsap.fromTo(
        images,
        { scale: 0.8 }, // start smaller
        {
          scale: 1, // grow to full size
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom", // starts when section enters viewport
            end: "bottom top",   // ends when it leaves
            scrub: true,         // smooth scroll animation
          },
        }
      )
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-[100vh]'>
      <div className='pt-[40vh]'>
        <h2 className='font-[font1] lg:text-[9.5vw] text-7xl uppercase'>Projects</h2>
      </div>
      <div className='-lg:mt-10 lol'>
        {projects.map(function(elem, idx){
          return <div key={idx} className='hero w-full lg:h-[700px] mb-4 flex lg:flex-row flex-col lg:gap-3.5 gap-1.5'>
            <ProjectCard image1={elem.image1} image2={elem.image2}/>
          </div>
        })}

      </div>
    </div>
  )
}

export default Projects