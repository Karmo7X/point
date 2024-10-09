import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import logo from "../../assets/img/logo.png";
import Animation1 from "../../assets/img/Animation -1.gif";
import Animation2 from "../../assets/img/Animation - 2.gif";
import { Link, Route, useLocation } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoCloseSharp } from "react-icons/io5";
import "aos/dist/aos.css";
import AOS from "aos";
import Container from "react-bootstrap/Container";
import { Row, Col , Button, Modal} from "react-bootstrap";
import big from "../../assets/img/bigImg.png";
import col4 from "../../assets/img/col-4.png";
import col8 from "../../assets/img/col-8.png";
import col4s from "../../assets/img/col-4s.png";
import col8s from "../../assets/img/col-8s.png";
import richy from "../../assets/img/Richy_Group_Logo_1 1@1x.png";
import play from "../../assets/img/https_@1x.png";
import nassr from "../../assets/img/alnassr.png";
import somr from "../../assets/img/somr.png";
import bladya from "../../assets/img/bladya.png";
import logos from "../../assets/img/logos.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "swiper/css/effect-fade";
import one from "../../assets/img/Graphic Design@1x.png";
import two from "../../assets/img/Microphone@1x.png";
import three from "../../assets/img/Event@1x.png";
import four from "../../assets/img/idea@1x.png";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import Nav from "../../components/NavbarScroll/Nav";
import { useDispatch } from "react-redux";
import { clientsApi, typeApi } from "../../Api/slice/ApiGet";
import paralexx from "../../assets/img/Frame14.png";
// import paralexx from "../../assets/img/point.png";
import Top from "../../components/Top/Top";
function Home() {
  const [active, setActive] = useState(false);

  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(() => {
    // Retrieve the language from sessionStorage or default to "ar"
    return sessionStorage.getItem("language") || "ar";
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    sessionStorage.setItem("language", lang);
  };

  useEffect(() => {
    // Update the HTML lang attribute and change the language in i18n whenever the language changes
    const currentLanguage = sessionStorage.getItem("language") || "ar";
    document.documentElement.lang = currentLanguage;
    i18n.changeLanguage(currentLanguage);
  }, [language]);

  const handleWorldIconClick = () => {
    // Toggle between 'en' and 'ar' languages
    const newLanguage = language === "en" ? "ar" : "en";
    changeLanguage(newLanguage);
    window.location.reload();
  };

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
    AOS.init({
      duration: 300, // Animation duration in milliseconds
    });
  }, []);
  useEffect(() => {
    const handleResize = () => {
      const elements = document.querySelectorAll("[data-aos]");
      if (window.innerWidth <= 992) {
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

  const [showOverlay, setShowOverlay] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
 //console.log(showOverlay)
// Handle the initial loading screen
useEffect(() => {
  const timer = setTimeout(() => {
    setShowOverlay(false);  // Hide the overlay after 3 seconds
    setAnimationComplete(true);  // Mark the animation as complete
  }, 4000);

  return () => clearTimeout(timer);  // Clean up timer on unmount
}, []);

// Handle the scroll event logic
// useEffect(() => {
//   const handleScroll = () => {
//     if (!animationComplete && window.scrollY > 0) {
//       setShowOverlay(true);  // Show the overlay when scrolling begins
//       setTimeout(() => {
//         setShowOverlay(false);  // Hide the overlay after 3 seconds
//         setAnimationComplete(true);  // Mark the animation as complete
//       }, 3000);
//     }
//   };

//   // Attach scroll event listener only after the first loading is done
//   if (!animationComplete) {
//     window.addEventListener('scroll', handleScroll);
//   }

//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, [animationComplete]);
  const [dataClients, setDataClients] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clientsApi()).then((result) => {
      //console.log(result);

      if (result?.payload?.status == 200) {
        setDataClients(result?.payload?.data?.data);
        //console.log(dataClients);
      }
    });
  }, []);
  //console.log(dataClients);
  const lang = sessionStorage.getItem("language") || "ar";
  const [servs, setServs] = useState([]);
  useEffect(() => {
    let dataType = {
      lang,
      key: "services",
    };
    dispatch(typeApi(dataType)).then((result) => {
      if (result?.payload?.status == 200) {
        setServs(result?.payload?.data?.data);
        //console.log(servs);
      }
    });
  }, [lang]);
  const colors = [
    {
      id: 1,
      gradient: "linear-gradient(180deg, #8EC4FF -3%, #439DFF 100%)",
    },
    {
      id: 2,
      gradient: "linear-gradient(180deg, #67DFCE -3%, #72B2A8 100%)",
    },
    { id: 3, gradient: "linear-gradient(180deg, #F95C73 -3%, #D0273F 100%)" },
    {
      id: 4,
      gradient: " linear-gradient(180deg, #A02DDD -3%, #561877 100%)",
    },
  ];

  const mergedArray = servs.map((detail, index) => {
    const color = colors[index % colors.length];
    return { ...detail, gradient: color.gradient };
  });

  //console.log(mergedArray);

  const bottomRef = useRef(null);
  const clientsRef = useRef(null);

  // دالة التمرير إلى الجزء السفلي
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  //  const scrollToClients = () => {
  //    clientsRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen width is 768px or less
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
   const [portfolio, setPortfolio] = useState([]);
    console.log(portfolio)
   useEffect(() => {
     let dataType = {
       lang,
       key: "portfolio",
     };
     dispatch(typeApi(dataType)).then((result) => {
       if (result?.payload?.status == 200) {
         //console.log(result?.payload?.data?.data)
         setPortfolio(result?.payload?.data?.data);
         
       }
     });
   }, [lang]);
 const [visibleBatch, setVisibleBatch] = useState(1);
 const batchSize = 6; // عدد العناصر في كل دفعة
 const intervalTime = 2000; // زمن الانتظار بين كل دفعة (2 ثانية في هذا المثال)

 useEffect(() => {
   AOS.init({ duration: 1000 }); // تهيئة AOS مع مدة الانتقال

   if (visibleBatch * batchSize < dataClients.length) {
     const interval = setInterval(() => {
       setVisibleBatch((prevBatch) => prevBatch + 1);
     }, intervalTime);

     return () => clearInterval(interval);
   }
 }, [visibleBatch, dataClients.length]);
  
 const location = useLocation();

 useEffect(() => {
   if (location.hash) {
     const element = document.getElementById(location.hash.substring(1));
     if (element) {
       element.scrollIntoView({ behavior: 'smooth' });
     }
   }
 }, [location]);

 const [show, setShow] = useState(false);
 const [selectedItem, setSelectedItem] = useState(null);

 const handleShow = (item) => {
  //console.log(item)
   setSelectedItem(item);
   setShow(true);
 };

 const handleClose = () => setShow(false);
   

 const closeModal = (event) => {
  // Close the modal if the user clicks outside the modal content
  if (event.target.classList.contains('fixed')) {
    handleClose();
  }
};

useEffect(() => {
  // Add event listener for ESC key to close the modal
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  // Cleanup the event listener on component unmount
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [handleClose]);


  return (
    <>
      {/* Start Header */}
      {active === false ? (
        <div className="header">
          <div className="container">
            <div className="nav">
              <div className="links">
                <Link to="/servs">{t("global.nav.serv_link")}</Link>
                <Link to="/who">{t("global.nav.who")}</Link>
                <Link to="/phil">{t("global.nav.phil")}</Link>
                <Link to="">
                  <span onClick={scrollToBottom}>
                    {t("global.nav.success")}
                  </span>
                </Link>

                <Link to="/#secclients">{t("global.nav.clients")}</Link>

                <Link to="/creations"> {t("global.nav.creations")}</Link>
                <Link to="/employment"> {t("global.nav.employment")}</Link>
                <Link to="#">
                  <span onClick={handleWorldIconClick}>
                    {" "}
                    {t("global.nav.english")}
                  </span>
                </Link>
              </div>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      ) : null}
      {active === true ? (
        <Nav
          name={t("global.nav.home")}
          Class="header2"
          bottom={scrollToBottom}
        />
      ) : null}
      <Nav
        name={t("global.nav.home")}
        Class="header3"
        bottom={scrollToBottom}
      />
      {/* End Header */}

      {/* Start Landing */}

      <div className="landing">
        <div className="overlay"></div>
        <div className="text">
          <div
            className="content"
            data-aos="fade-down"
            data-aos-easing="ease"
            data-aos-duration="2000"
          >
            <h2>{t("global.landing.title")}</h2>
            <p>{t("global.landing.description")}</p>
          </div>
        </div>
        <img className="animation1" src={Animation1} alt="" />
      </div>
      {/* End Landing */}
      <div className={`point-overlay  ${showOverlay ? "show animate-goUp" : ""}`}>        
        <div class="container-overlay">
    <div class="box">
        <div class="title">
            <span class="block"></span>
            <h1>POINT<span></span></h1>
        </div>
        <div class="role">
            <div class="block"></div>
            <p></p>
        </div>

    </div>
</div>
      </div>
      

      {/* start works */}
      <div className="works">
        <div className="container">
          <div className="main-heading" data-aos="fade-down">
            <h2>{t("global.works.title")}</h2>
            <p>{t("global.works.description")}</p>
          </div>
        </div>
        <Container>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
  {portfolio.length !== 0 ? (
    portfolio.map((data, idx) => (
      <div key={idx} className="relative w-full h-[602px] flex items-center justify-center">
        <button
          className="w-full h-full flex flex-col items-center justify-center bg-white shadow-lg"
          onClick={() => handleShow(data)} // Trigger modal
        >
          <img src={data?.image} alt="Portfolio Item" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <img src={data?.icon} alt="Icon" className="w-[111px]" />
            <span className="text-2xl mt-2">{data?.title}</span>
          </div>
        </button>
      </div>
    ))
  ) : (
    <div>No portfolio items available</div>
  )}

  
  {show && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-xl font-bold">{selectedItem?.title || "Modal title"}</h3>
          <button onClick={handleClose} className="text-gray-600">X</button>
        </div>
        <div className="mt-4">
          {selectedItem?.description || "No content available."}
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={handleClose} className="bg-gray-300 px-4 py-2 rounded mr-2">Close</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Understood</button>
        </div>
      </div>
    </div>
  )}
</div> */}
<Row className="example p-5 " > 

{portfolio.length == 1 && (
              <>
           
                <Col lg={6} md={6} sm={12}>
                  <div
                    className="im"
                    style={{
                      width: "100%",
                      height: "627px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[0])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-left"
                    // }
                  >
                    <img src={portfolio[0]?.image} alt="Col 4" />
                    <div className="desc">
                      <img
                        src={portfolio[0]?.icon}
                        alt=""
                        style={{ width: "111px" }}
                      />
                      <span style={{ fontSize: "30px" }}>
                        {portfolio[0]?.title}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}></Col>
              </>
            )}
            {portfolio.length == 2 && (
              <>
                <Col lg={6} md={6} sm={12}>
                  <div
                    className="im"
                    style={{
                      width: "100%",
                      height: "627px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[0])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-left"
                    // }
                  >
                    <img src={portfolio[0]?.image} alt="Col 4" />
                    <div className="desc">
                      <img
                        src={portfolio[0]?.icon}
                        alt=""
                        style={{ width: "111px" }}
                      />
                      <span style={{ fontSize: "30px" }}>
                        {portfolio[0]?.title}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div
                    style={{
                      width: "100%",
                      height: "362px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[1])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-right"
                    // }
                    className="im"
                  >
                    <img src={portfolio[1]?.image} alt="Col 8" />
                    <div className="desc">
                      <img
                        style={{ width: "111px" }}
                        src={portfolio[1]?.icon}
                        alt=""
                      />{" "}
                      <span> {portfolio[1]?.title}</span>
                    </div>
                  </div>
                </Col>
              </>
            )}
            {portfolio.length == 3 && (
              <>
                <Col lg={6} md={6} sm={12}>
                  <div
                    className="im"
                    style={{
                      width: "100%",
                      height: "627px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[0])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-left"
                    // }
                  >
                    <img src={portfolio[0]?.image} alt="Col 4" />
                    <div className="desc">
                      <img
                        src={portfolio[0]?.icon}
                        alt=""
                        style={{ width: "111px" }}
                      />
                      <span style={{ fontSize: "30px" }}>
                        {portfolio[0]?.title}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "302px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[2])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-left"
                    // }
                    className="im"
                  >
                    <img src={portfolio[2]?.image} alt="Col 4" />
                    <div className="desc">
                      <img
                        src={portfolio[2]?.icon}
                        alt=""
                        style={{ width: "111px" }}
                      />
                      <span style={{ fontSize: "30px" }}>
                        {portfolio[2]?.title}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div
                    style={{
                      width: "100%",
                      height: "362px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[1])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-right"
                    // }
                    className="im"
                  >
                    <img src={portfolio[1]?.image} alt="Col 8" />
                    <div className="desc">
                      <img
                        style={{ width: "111px" }}
                        src={portfolio[1]?.icon}
                        alt=""
                      />{" "}
                      <span> {portfolio[1]?.title}</span>
                    </div>
                  </div>
                </Col>
              </>
            )}
            {portfolio.length == 4 && (
              <>
                <Col lg={6} md={6} sm={12}>
                   
                   <div className="flex items-center flex-col ">
                     {" "}
                    <div
                      className="im"
                      style={{
                        width: "100%",
                        // height: "627px",
                        marginTop: "10px",
                        cursor:'pointer'
                      }}
                      onClick={() => handleShow(portfolio[0])}
                      // data-aos={
                      //   window.innerWidth <= 768 ? "zoom-in" : "fade-left"
                      // }
                    >
                      <img src={portfolio[0]?.image} alt="Col 4" />
                      <div className="desc">
                        <img
                          src={portfolio[0]?.icon}
                          alt=""
                          style={{ width: "111px" }}
                        />
                        <span style={{ fontSize: "30px" }}>
                          {portfolio[0]?.title}
                        </span>
                      </div>
                    </div>
                  
                  
                    {" "}
                    <div
                      style={{
                        width: "100%",
                        // height: "302px",
                        marginTop: "10px",
                        cursor:'pointer'
                      }}
                      onClick={() => handleShow(portfolio[2])}
                      // data-aos={
                      //   window.innerWidth <= 768 ? "zoom-in" : "fade-left"
                      // }
                      className="im"
                    >
                      <img src={portfolio[2]?.image} alt="Col 4" />
                      <div className="desc">
                        <img
                          src={portfolio[2]?.icon}
                          alt=""
                          style={{ width: "111px" }}
                        />
                        <span style={{ fontSize: "30px" }}>
                          {portfolio[2]?.title}
                        </span>
                      </div>
                    </div>
                  
                   </div>
                   
                </Col>
                <Col lg={6} md={6} sm={12}>
                  
                    {" "}
                    <div
                      style={{
                        width: "100%",
                        // height: "362px",
                        marginTop: "10px",
                        cursor:'pointer'
                      }}
                      onClick={() => handleShow(portfolio[1])}
                      data-aos={
                        window.innerWidth <= 768 ? "zoom-in" : "fade-right"
                      }
                      className="im"
                    >
                      <img src={portfolio[1]?.image} alt="Col 8" />
                      <div className="desc">
                        <img
                          style={{ width: "111px" }}
                          src={portfolio[1]?.icon}
                          alt=""
                        />{" "}
                        <span> {portfolio[1]?.title}</span>
                      </div>
                    </div>
                  
                  
                    {" "}
                    <div
                      style={{
                        width: "100%",
                        // height: "568px",
                        marginTop: "10px",
                        cursor:'pointer'
                      }}
                      onClick={() => handleShow(portfolio[3])}
                      data-aos={
                        window.innerWidth <= 768 ? "zoom-in" : "fade-right"
                      }
                      className="im"
                    >
                      <img src={portfolio[3]?.image} alt="Col 8" />
                      <div className="desc">
                        <img
                          style={{ width: "171px" }}
                          src={portfolio[3]?.icon}
                          alt=""
                        />
                        <span> {portfolio[3]?.title}</span>
                      </div>
                    </div>
                  
                </Col>
              </>
            )}
            {portfolio.length == 5 && (
              <>
                <Col lg={4} md={4} sm={12}>
                  <div
                    className="im"
                    style={{
                      width: "100%",
                      height: "627px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[0])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-left"
                    // }
                  >
                    <img src={portfolio[0]?.image} alt="Col 4" />
                    <div className="desc">
                      <img
                        src={portfolio[0]?.icon}
                        alt=""
                        style={{ width: "111px" }}
                      />
                      <span style={{ fontSize: "30px" }}>
                        {portfolio[0]?.title}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "302px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[2])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-left"
                    // }
                    className="im"
                  >
                    <img src={portfolio[2]?.image} alt="Col 4" />
                    <div className="desc">
                      <img
                        src={portfolio[2]?.icon}
                        alt=""
                        style={{ width: "111px" }}
                      />
                      <span style={{ fontSize: "30px" }}>
                        {portfolio[2]?.title}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={12}>
                  <div
                    style={{
                      width: "100%",
                      height: "362px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[1])}
                    data-aos={
                      window.innerWidth <= 768 ? "zoom-in" : "fade-right"
                    }
                    className="im"
                  >
                    <img src={portfolio[1]?.image} alt="Col 8" />
                    <div className="desc">
                      <img
                        style={{ width: "111px" }}
                        src={portfolio[1]?.icon}
                        alt=""
                      />{" "}
                      <span> {portfolio[1]?.title}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "568px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[3])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-right"
                    // }
                    className="im"
                  >
                    <img src={portfolio[3]?.image} alt="Col 8" />
                    <div className="desc">
                      <img
                        style={{ width: "171px" }}
                        src={portfolio[3]?.icon}
                        alt=""
                      />
                      <span> {portfolio[3]?.title}</span>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div
                    className="im"
                    style={{
                      width: "100%",
                      height: "627px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[4])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-left"
                    // }
                  >
                    <img src={portfolio[4]?.image} alt="Col 4" />
                    <div className="desc">
                      <img
                        src={portfolio[4]?.icon}
                        alt=""
                        style={{ width: "111px" }}
                      />
                      <span style={{ fontSize: "30px" }}>
                        {portfolio[4]?.title}
                      </span>
                    </div>
                  </div>
                </Col>
              </>
            )}
            {portfolio.length == 6 && (
              <>
                <Col lg={6} md={6} sm={12}>
                  <div
                    className="im"
                    style={{
                      width: "100%",
                      height: "627px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[0])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-left"
                    // }
                  >
                    <img src={portfolio[0]?.image} alt="Col 4" />
                    <div className="desc">
                      <img
                        src={portfolio[0]?.icon}
                        alt=""
                        style={{ width: "111px" }}
                      />
                      <span style={{ fontSize: "30px" }}>
                        {portfolio[0]?.title}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "302px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[2])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-left"
                    // }
                    className="im"
                  >
                    <img src={portfolio[2]?.image} alt="Col 4" />
                    <div className="desc">
                      <img
                        src={portfolio[2]?.icon}
                        alt=""
                        style={{ width: "111px" }}
                      />
                      <span style={{ fontSize: "30px" }}>
                        {portfolio[2]?.title}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div
                    style={{
                      width: "100%",
                      height: "362px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[1])}
                    data-aos={
                      window.innerWidth <= 768 ? "zoom-in" : "fade-right"
                    }
                    className="im"
                  >
                    <img src={portfolio[1]?.image} alt="Col 8" />
                    <div className="desc">
                      <img
                        style={{ width: "111px" }}
                        src={portfolio[1]?.icon}
                        alt=""
                      />{" "}
                      <span> {portfolio[1]?.title}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "568px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[3])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-right"
                    // }
                    className="im"
                  >
                    <img src={portfolio[3]?.image} alt="Col 8" />
                    <div className="desc">
                      <img
                        style={{ width: "171px" }}
                        src={portfolio[3]?.icon}
                        alt=""
                      />
                      <span> {portfolio[3]?.title}</span>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div
                    className="im"
                    style={{
                      width: "100%",
                      height: "627px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[4])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-left"
                    // }
                  >
                    <img src={portfolio[4]?.image} alt="Col 4" />
                    <div className="desc">
                      <img
                        src={portfolio[4]?.icon}
                        alt=""
                        style={{ width: "111px" }}
                      />
                      <span style={{ fontSize: "30px" }}>
                        {portfolio[4]?.title}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div
                    style={{
                      width: "100%",
                      height: "362px",
                      marginTop: "10px",
                      cursor:'pointer'
                    }}
                    onClick={() => handleShow(portfolio[5])}
                    // data-aos={
                    //   window.innerWidth <= 768 ? "zoom-in" : "fade-right"
                    // }
                    className="im"
                  >
                    <img src={portfolio[5]?.image} alt="Col 8" />
                    <div className="desc">
                      <img
                        style={{ width: "171px" }}
                        src={portfolio[5]?.icon}
                        alt=""
                      />
                      <span> {portfolio[5]?.title}</span>
                    </div>
                  </div>
                </Col>
              </>
            )}
</Row>

             {show && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"onClick={closeModal}>
    <div className="bg-white  rounded shadow-lg w-3/5">
      {/* <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-bold">NOW IS THE TIME</h2>
        <button onClick={handleClose} className="text-gray-600 text-lg font-bold">X</button>
      </div> */}
      
      <div className="">
        {/* Embed the YouTube video */}
        <video 
  width="100%" 
  height="315" 
  controls 
  src={`https://backend.pointksa.net/${selectedItem?.portfolio_link}`} // Ensure this is a valid video URL
  title="Video player"
>
  Your browser does not support the video tag.
</video>


        {/* Add content similar to the modal in the image */}
        <div className="mt-4 p-5">
          <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{selectedItem?.title || "No title available."} </h3>
        </div>
        <div>
          <img src={selectedItem?.icon } style={{ width: "101px" }} alt="" />
        </div>
          </div>
          
          <p dangerouslySetInnerHTML={{ __html: selectedItem?.description || "No content available." }} className="mt-2 text-gray-700">
          
           </p>
          {/* <p className="mt-2 text-gray-700">The video took 1 day to shoot.</p>
          <p className="mt-2 text-gray-700">Target audience: Alinma audience, as well as credit card users.</p> */}
        </div>
        
        {/* Add the button with relevant text */}
        {/* <div className="flex justify-end mt-4">
          <button onClick={handleClose} className="bg-gray-300 px-4 py-2 rounded mr-2">Close</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Understood</button>
        </div> */}
      </div>
    </div>
  </div>
  
  )}

        </Container>
      </div>
      {/* end works */}
      {/* start clients */}
      {/* start servs slider */}
      <div className="slider ">
        <div className="container">
          <div data-aos="fade-down " className="main-heading mb-5">
            <h2>{t("global.services.title")}</h2>
            <p style={{ color: "#3998FF" }}>
              {t("global.services.description")}
            </p>
          </div>
          <Swiper
            className={`swiper-servs mx-auto `}
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            data-aos="zoom-in"
            modules={[Navigation, Autoplay]}
            // direction={swiperDirection}
            spaceBetween={50}
            effect="fade"
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            speed={1000}
            navigation={window.innerWidth <= 768 ? false : true}
            pagination={{ clickable: true }}
            breakpoints={{
              // عندما يكون العرض 640 بكسل أو أكثر
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              // عندما يكون العرض 768 بكسل أو أكثر
              768: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              // عندما يكون العرض 1024 بكسل أو أكثر
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
          >
            {mergedArray &&
              mergedArray.map((serv, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className="card text-center mx-auto"
                    style={{ width: "25rem" }}
                  >
                    <div className="card-body ps-5 pe-5 pt-4 pb-4">
                      <div
                        className="serv-icon text-center mx-auto"
                        style={{ background: serv?.gradient }}
                      >
                        <img src={serv?.icon} alt="..." />
                      </div>
                      <h5 className="card-title">{serv?.title}</h5>
                      <p
                        className="card-text"
                        dangerouslySetInnerHTML={{ __html: serv?.description }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      {/* end servs slider */}

      {/* <div className="clients mb-4" id="target-section">
        <div className="container ">
          <div data-aos="fade-down" className="main-heading">
            <h2> {t("global.clients.title")}</h2>
            <p style={{ color: "#3998FF" }}>
              {t("global.clients.description")}
            </p>
          </div>
        </div>
        <Container>
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div
                data-aos="zoom-in"
                className="logos d-flex align-items-center justify-content-center"
              >
                <Row className="d-flex align-items-center justify-content-center">
                  {dataClients &&
                    dataClients.map((img) => (
                      <>
                        <Col
                          lg={2}
                          md={4}
                          sm={4}
                          className="mb-5 d-flex align-items-center justify-content-center"
                          data-aos="fade-down"
                        >
                          <img src={img?.logo} alt="" data-aos="fade-down" />
                        </Col>
                      </>
                    ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="clients mb-4" id="secclients">
        <div className="container ">
          <div data-aos="fade-down" className="main-heading">
            <h2> {t("global.clients.title")}</h2>
            <p style={{ color: "#3998FF" }}>
              {t("global.clients.description")}
            </p>
          </div>
        </div>
        <Container fluid={false} className="p-2">
          <div className="grid-logos">
          <div
                data-aos="zoom-in"
                className="logos d-flex align-items-center justify-content-center"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">
                  {dataClients
                    .slice(0, visibleBatch * batchSize)
                    .map((img, index) => (
                      <div
                        key={index}
                        
                        className="mb-5 d-flex align-items-center justify-content-center"
                        data-aos="fade-down"
                      >
                        <img
                          src={img.logo}
                          alt={`Client logo ${index}`}
                          style={{ width: "100%" }}
                        />
                      </div>
                    ))}
                </div>
              </div>
          </div>
          <Swiper
            className={`swipe-logos mx-auto mt-5`}
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            data-aos="zoom-in"
            modules={[Navigation, Autoplay]}
            // direction={swiperDirection}
            // spaceBetween={50}
            effect="fade"
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            speed={1000}
            navigation={window.innerWidth <= 768 ? false : true}
            pagination={{ clickable: true }}
            breakpoints={{
              // عندما يكون العرض 640 بكسل أو أكثر
              100: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // عندما يكون العرض 768 بكسل أو أكثر
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // عندما يكون العرض 1024 بكسل أو أكثر
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            <div className="d-flex align-items-center">
              {dataClients &&
                dataClients.map((img, index) => (
                  <SwiperSlide className=" align-self-center" key={index}>
                    <img
                      className="mx-auto d-block "
                      src={img?.logo}
                      alt=""
                      style={{ width: "100%", height: "100px" }}
                    />
                  </SwiperSlide>
                ))}
            </div>
          </Swiper>
        </Container>
      </div>
      <Top />
      {/* end clients */}
      {/* start success */}
      <div ref={bottomRef}>
        <Footer />
      </div>
      {/* End success */}
    </>
  );
}

export default Home;
