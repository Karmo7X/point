import React, { useEffect, useRef, useState } from "react";
import './Creations.css'
import "aos/dist/aos.css";
import AOS from "aos";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import NavM from "../../components/NavMove/NavM";
import Nav from "../../components/NavbarScroll/Nav";
import light from "../../assets/img/light.gif"
import settings from "../../assets/img/settings.gif"
import color from "../../assets/img/color.gif"
import highlight from "../../assets/img/Phone.svg";
import long from "../../assets/img/long.png";
// images for sticky 
import img1 from '../../assets/img/Group25047.png'
import img2 from '../../assets/img/Group25048.png'
import img3 from '../../assets/img/Group25049.png'
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { typeApi } from "../../Api/slice/ApiGet";
import Top from "../../components/Top/Top";


function Creations() {
   const { t } = useTranslation();
     const [active, setActive] = useState(false);

     useEffect(() => {
       AOS.init({
         duration: 1000, // Animation duration in milliseconds
       });
     }, []);
     const isActive = () => {
       window.scrollY > 0 ? setActive(true) : setActive(false);
     };
     useEffect(() => {
       window.addEventListener("scroll", isActive);
       return () => {
         window.removeEventListener("scroll", isActive);
       };
     }, []);
     useEffect(() => {
       const handleResize = () => {
         const elements = document.querySelectorAll("[data-aos]");
         if (window.innerWidth <= 768) {
           elements.forEach((element) => {
             element.removeAttribute("data-aos");
           });
         } else {
           elements.forEach((element) => {
             const dataAosValue = element.getAttribute("data-aos-original");
             if (dataAosValue) {
               element.setAttribute("data-aos", dataAosValue);
             }
           });
         }
       };

       const saveOriginalDataAos = () => {
         const elements = document.querySelectorAll("[data-aos]");
         elements.forEach((element) => {
           const dataAosValue = element.getAttribute("data-aos");
           element.setAttribute("data-aos-original", dataAosValue);
         });
       };

       saveOriginalDataAos();
       window.addEventListener("resize", handleResize);
       handleResize(); // Run on initial load

       AOS.init();

       return () => {
         window.removeEventListener("resize", handleResize);
       };
     }, []);
    const scrollRef = useRef(null);
 const [showTextOne, setShowTextOne] = useState(true);
 const [showTextTwo, setShowTextTwo] = useState(false);
    useEffect(() => {
      const handleWheel = (event) => {
        event.preventDefault();
        if (scrollRef.current) {
          scrollRef.current.scrollBy({
            top: event.deltaY < 0 ? -580 : 580,
            behavior: "smooth",
          });
           if (event.deltaY <= 0) {
             setShowTextOne(true);
             setShowTextTwo(false);
           } else {
             setShowTextOne(false);
             setShowTextTwo(true);
           }
        }
      };

      // const scrollElement = scrollRef.current;
      // scrollElement.addEventListener("wheel", handleWheel);

      // return () => {
      //   scrollElement.removeEventListener("wheel", handleWheel);
      // };
    }, []);
  const lang = sessionStorage.getItem("language") || "ar";
   const dispatch = useDispatch();
   const [creations, setCreations] = useState([]);
   console.log(creations);
   useEffect(() => {
     let dataType = {
       lang,
       key: "creations",
     };
     dispatch(typeApi(dataType)).then((result) => {
       if (result?.payload?.status == 200) {
         setCreations(result?.payload?.data?.data);
         
       }
     });
   }, [lang]);

const bottomRef = useRef(null);

// دالة التمرير إلى الجزء السفلي
const scrollToBottom = () => {
  bottomRef.current.scrollIntoView({ behavior: "smooth" });
};


//  data test 
const content = [
  {
    title: creations[0]?.title,
    description:
     <span
                  dangerouslySetInnerHTML={{
                    __html: creations[0]?.description,
                  }}
                />,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <img
        src={img1}
        style={{width:'210px',height:"600"}}
        
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: creations[1]?.title,
    description:
    <span
    dangerouslySetInnerHTML={{
      __html: creations[1]?.description,
    }}
  />,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <img
        src={img2}
        style={{width:'210px',height:"600"}}
        
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: creations[2]?.title,
    description:
    <span
    dangerouslySetInnerHTML={{
      __html: creations[2]?.description,
    }}
  />,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <img
        src={img3}
        style={{width:'210px',height:"600"}}
        alt="linear board demo"
      />
    </div>
    ),
  },
 
];
  return (
    <>
      {active === false ? <NavM bottom={scrollToBottom} /> : null}
      {active === true ? (
        <Nav
          name={t("global.props.creations")}
          Class="header2"
          bottom={scrollToBottom}
        />
      ) : null}
      <Nav
        name={t("global.props.creations")}
        Class="header3"
        bottom={scrollToBottom}
      />
      {/* start creations-landing */}
      <div className="creations-landing">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="creations-content">
                <div className="first-gif">
                  {/* <div className="one-gif" data-aos="fade-up-right"   data-aos-easing="linear"
     data-aos-duration="2500">
                    <img src={settings} alt="" />
                  </div> */}
                  {/* <div className="two-gif" data-aos="fade-up-left"   data-aos-easing="linear"
     data-aos-duration="5000">
                    <img src={color} alt="" />{" "}
                  </div> */}
                </div>
                <div className="creations-text" data-aos="zoom-in"  data-aos-easing="linear"
     data-aos-duration="7000">
                  <div>
                    <span>{t("global.creations.title1")} </span>
                    <span>{t("global.creations.title2")} </span>
                  </div>
                  <p>{t("global.creations.description")} </p>
                </div>
                {/* <div className="last-gif">
                  <div className="three-gif" data-aos="fade-down"  data-aos-duration="5000">
                    <img src={light} alt="" />
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="scroll-seq mt-5 "
        style={{
          // backgroundColor: showTextOne
          //   ? "#F0F5F5"
          //   : showTextTwo
          //   ? "#FEF6F7"
          //   : "#EBF5FF",
          backgroundColor:'#F5F8FB',
          position:'relative',
          
        }}
      >
         <div className="parent_div   3xl:mt-70   ">
        <div className="highlight-container  ">
                <img
                  src={highlight}
                  alt="Highlights"
                  className="highlights-image"
                />
                 <div className="div_block-27"></div>
                    </div>
                    
               <div className="div_block gap-11 ">
                  <div className="right_img">
                      {content.map((content,idx)=>{
                    return(<>
                    
                     <div key={idx} className="screen-container ">
                     {content.content}
                    </div>
                    
                    </>)


                    })}
                   
                  </div>
                  <div className="content_phone hidden md:block lg:block xl:block 2xl:block ">
                  {content.map((content,idx)=>{
                    return(<>
                    
                    <div className="content_slide" key={idx}>
                  <div className="screen-descipt ">
                  <span className="text-2xl font-bold">{content.title}</span>
                  <span className="text-xl ">{content.description}</span>
                  </div>
                
                 </div>
                    
                    </>)


                    })}
                 
                  </div>
                  
               </div>
                  

       
        
          
        </div>
          <div className="block lg:block xl:block 2xl:block" style={{backgroundColor:'#F5F8FB',height:'50vh'}}></div>

      
      </div>
      <Top/>
      <div ref={bottomRef}>
        <Footer />
      </div>
    </>
  );
}

export default Creations