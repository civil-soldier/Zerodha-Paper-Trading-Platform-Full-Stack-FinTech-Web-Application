import React from 'react'

function RightSection({
imageURL,
  productName,
  productDescription,
  learnMore,
}) {
    return (
        <>
        {/* Main content */}
      <div className="container hero-section row align-items-center px-5 my-5 " style={{ maxWidth: "1100px" , marginTop:"80px" , marginBottom:"80px", margin: "0 auto" }}>

        {/* LEFT TEXT */}
        <div className="col-md-6 p-5">
          <h1 className=" text-capitalize" style={{ fontWeight: 450, fontSize: "30px" }} >{productName}</h1>
          <p className="mt-3"
          style={{ fontWeight: 400, fontSize: "18px", color: "#555" }}>{productDescription}</p>

          <div className="my-3">
            <a href={learnMore}>Learn More →</a>
          </div>

        </div>

        {/* Right IMAGE */}
        <div className="col-md-6 p-3" style={{marginTop:"20px" , marginBottom:"20px"}} >
          <img src={imageURL} alt="" className="img-fluid" />
        </div>
      </div>
    </>
    );
};


export default RightSection;