interface PriceBadgeProps {
  price?: string;
  days?: string;
  savePercent?: string;
}

export function PriceBadge({
  price = '299',
  days = '5-DAYS',
  savePercent = '84%'
}: PriceBadgeProps) {
  return (
    <div className="badge-wrapper">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="outline" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology in="SourceAlpha" result="dilated" operator="dilate" radius="2" />
            <feFlood floodColor="white" result="white" />
            <feComposite in="white" in2="dilated" operator="in" result="outline" />
            <feMerge>
              <feMergeNode in="outline" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className="tag-left">
        <span>ONLY</span>
      </div>

      <div className="ribbon-right">
        <div className="save-content">
          <div className="save-title">SAVE</div>
          <div className="save-value">{savePercent}</div>
        </div>
      </div>

      <div className="circle-center">
        <div className="days">{days}</div>
        <div className="price-display">
          <span className="currency">$</span>{price}
        </div>
        <div className="terms">
          PER PACKAGE<br />
          <small>(All 4-Nights)</small>
        </div>
      </div>

      <style>{`
        .badge-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 320px;
          height: 160px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .badge-wrapper {
            max-width: 400px;
            height: 200px;
          }
        }

        .circle-center {
          position: relative;
          z-index: 10;
          width: 140px;
          height: 140px;
          background: #6a2da1;
          border: 4px solid white;
          border-radius: 50%;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          font-family: 'Arial Black', Gadget, sans-serif;
        }

        @media (min-width: 640px) {
          .circle-center {
            width: 180px;
            height: 180px;
            border-width: 5px;
          }
        }

        .days {
          font-size: 1rem;
          line-height: 1;
          margin-bottom: -2px;
          font-style: italic;
          font-weight: 900;
        }

        @media (min-width: 640px) {
          .days {
            font-size: 1.4rem;
          }
        }

        .price-display {
          font-size: 3.2rem;
          font-weight: 900;
          line-height: 1;
          display: flex;
          align-items: flex-start;
        }

        @media (min-width: 640px) {
          .price-display {
            font-size: 4.2rem;
          }
        }

        .currency {
          font-size: 1.5rem;
          margin-top: 6px;
          margin-right: 1px;
        }

        @media (min-width: 640px) {
          .currency {
            font-size: 2rem;
            margin-top: 8px;
          }
        }

        .terms {
          font-size: 0.6rem;
          line-height: 1.1;
          font-weight: bold;
        }

        @media (min-width: 640px) {
          .terms {
            font-size: 0.7rem;
          }
        }

        .terms small {
          font-size: 0.55rem;
        }

        @media (min-width: 640px) {
          .terms small {
            font-size: 0.65rem;
          }
        }

        .tag-left {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 70px;
          height: 32px;
          z-index: 11;
          background: #f2d03b;
          color: black;
          clip-path: polygon(20% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 12px;
          font-size: 0.7rem;
          font-weight: 900;
          font-family: 'Arial Black', Gadget, sans-serif;
          filter: url(#outline);
        }

        @media (min-width: 640px) {
          .tag-left {
            width: 90px;
            height: 40px;
            font-size: 0.85rem;
            padding-left: 16px;
          }
        }

        .ribbon-right {
          position: absolute;
          right: -40px;
          top: 50%;
          transform: translateY(-50%);
          width: 160px;
          height: 65px;
          z-index: 1;
          background: #f2d03b;
          color: black;
          clip-path: polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 28px;
          font-family: 'Arial Black', Gadget, sans-serif;
          filter: url(#outline);
        }

        @media (min-width: 640px) {
          .ribbon-right {
            right: -60px;
            width: 210px;
            height: 85px;
            padding-right: 35px;
          }
        }

        .save-content {
          text-align: center;
          font-style: italic;
          transform: skewX(-5deg);
        }

        .save-title {
          font-size: 1rem;
          font-weight: 900;
          line-height: 0.8;
        }

        @media (min-width: 640px) {
          .save-title {
            font-size: 1.4rem;
          }
        }

        .save-value {
          font-size: 2.2rem;
          font-weight: 900;
          line-height: 1;
        }

        @media (min-width: 640px) {
          .save-value {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
