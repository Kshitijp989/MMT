import React from 'react';

const CouponCodes = () => {
  return (
    <div class="card col-md-5 bottomcard">
    <div className="coupon-codes">
      <h3>Coupon Codes</h3>
      <input type="radio" id="big-saver" name="coupon" />
      <label htmlFor="big-saver">MMTBIGSAVER ₹ 347</label>
      <input type="radio" id="best-buy" name="coupon" />
      <label htmlFor="best-buy">MMTBESTBUY ₹ 160</label>
    </div>
    </div>
  );
};

export default CouponCodes;