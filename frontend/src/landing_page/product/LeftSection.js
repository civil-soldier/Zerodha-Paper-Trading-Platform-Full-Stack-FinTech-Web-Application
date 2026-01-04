import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      {/* Main content */}
      <div className="container hero-section row align-items-center px-5 my-5 " style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* LEFT IMAGE */}
        <div className="col-md-6 p-3 " style={{marginTop:"20px" , marginBottom:"20px"}} >
          <img src={imageURL} alt="" className="img-fluid" />
        </div>

        {/* RIGHT TEXT */}
        <div className="col-md-6 p-5">
          <h1 className=" text-capitalize" style={{ fontWeight: 450, fontSize: "30px" }}>{productName}</h1>
          <p className="mt-3"
          style={{ fontWeight: 400, fontSize: "18px", color: "#555" }}>{productDescription}</p>

          <div className="my-3">
            <a href={tryDemo} className="me-3">Try Demo →</a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More →</a>
          </div>

          <div className="d-flex align-items-center gap-4">
            <a  href={googlePlay}>
              <img src="/media/images/googlePlayBadge.svg" alt="Google Play" height="45" />
            </a>

            <a href={appStore}>
              <img src="/media/images/appstoreBadge.svg" alt="App Store" height="45" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
