import React from 'react'

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
      <div className="row text-center d-flex flex-column align-items-center">

        <h1 className="mt-5" style={{ fontWeight: 500, fontSize: "32px" }}>
          Charges
        </h1>

        <p
          className="mt-1"
          style={{ fontSize: "21px", color: "#7c7b7bff", letterSpacing: "0.3px" }}
        >
          List of all charges and taxes
        </p>
      </div>

      <div className ="row p-1 mt-5">

        <div className="col-4 p-4">
            <img src="/media/images/pricing0.svg"></img>
            <h1 className="mt-5" style={{ fontWeight: 500, fontSize: "27px", textAlign:"center"  }}>Free equity delivery</h1>
            <p className="mt-4"
          style={{ fontSize: "16px", color: "#7c7b7bff", letterSpacing: "0.3px", textAlign:"center"  }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

        <div className="col-4 p-4">
            <img src="/media/images/intradayTrades.svg"></img>
            <h1 className="mt-5 " style={{ fontWeight: 500, fontSize: "27px" , textAlign:"center" }}>Intraday and F&O trades</h1>
            <p className="mt-4"
          style={{ fontSize: "16px", color: "#7c7b7bff", letterSpacing: "0.3px"  , textAlign:"center"  }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>

        <div className="col-4 p-4">
            <img src="/media/images/pricing0.svg"></img>
            <h1 className="mt-5" style={{ fontWeight: 500, fontSize: "27px", textAlign:"center"  }}>Free direct MF</h1>
            <p className="mt-4"
          style={{ fontSize: "16px", color: "#7c7b7bff", letterSpacing: "0.3px", textAlign:"center"  }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>

      </div>
    </div>
     );
}

export default Hero;