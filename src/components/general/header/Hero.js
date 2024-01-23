import React from "react";
import backgroundImage from "./hero-bg.jpg";
const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1546430498-05c7b929830e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})` }}
    >
      <div
        className="container position-relative"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1 dir="rtl" className="text-center">
          تنمية مهارات انتاج الرسومات المتحركة لدى طلاب كلية التربية
        </h1>
        <h2 dir="rtl" className="text-center mt-5">
          اعداد الباحثة :غادة رسلان
        </h2>
        <h2 dir="rtl" >
          اشراف
          <br />
          ا.د / ربيع عبد العظيم رمود 
          <br />
          &nbsp; &nbsp; استاذ  ورئيس قسم تكنولوجيا التعليم
          <br />
          د/ امانى سمير عبد الوهاب
          <br />
          &nbsp; &nbsp; مدرس بتكنولوجيا التعليم
        </h2>
        {/* <a href="courses.html" className="btn-get-started">
          Get Started
        </a> */}
      </div>
    </section>
  );
};

export default Hero;
