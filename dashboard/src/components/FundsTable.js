import React from "react";    // Commodity
 

const FundsTable = ({ title, data , icon }) => {
  return (
    <div className="col">
      <span>
        {icon}
        <p>{title}</p>
      </span>

      <div className="table">
        <div className="data">
          <p>Available margin</p>
          <p className="imp colored">{data.availableMargin?.toFixed(2) || "0.00"}
</p>
        </div>

        <div className="data">
          <p>Used margin</p>
          <p className="imp">{data.usedMargin?.toFixed(2) || "0.00"}
</p>
        </div>

        <div className="data">
          <p>Available cash</p>
          <p className="imp">{data.availableCash?.toFixed(2) || "0.00"}
</p>
        </div>

        <hr />

        <div className="data">
          <p>Opening balance</p>
          <p className="imp">{data.openingBalance?.toFixed(2) || "0.00"}
</p>
        </div>

        <div className="data">
          <p>Payin</p>
          <p className="imp">{data.playin?.toFixed(2) || "0.00"}
</p>
        </div>

        <div className="data">
          <p>Payout</p>
          <p className="imp">{data.payout?.toFixed(2) || "0.00"}
</p>
        </div>

        <div className="data">
          <p>SPAN</p>
          <p className="imp">{data.span?.toFixed(2) || "0.00"}
</p>
        </div>

        <div className="data">
          <p>Delivery margin</p>
          <p className="imp">{data.deliveryMargin?.toFixed(2) || "0.00"}
</p>
        </div>

        <div className="data">
          <p>Exposure</p>
          <p className="imp">{data.exposure?.toFixed(2) || "0.00"}
</p>
        </div>

        <div className="data">
          <p>Options premium</p>
          <p className="imp">{data.optionsPremium?.toFixed(2) || "0.00"}
</p>
        </div>

        <hr />

        <div className="data">
          <p>Collateral (Liquid funds)</p>
          <p className="imp">{data.collateralLiquid?.toFixed(2) || "0.00"}</p>
        </div>

        <div className="data">
          <p>Collateral (Equity)</p>
          <p className="imp">{data.collateralEquity?.toFixed(2) || "0.00"}</p>
        </div>

        <div className="data">
          <p>Total collateral</p>
          <p className="imp">{data.totalCollateral?.toFixed(2) || "0.00"}</p>
        </div>
      </div>
    </div>
  );
};

export default FundsTable;
