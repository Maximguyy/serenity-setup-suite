import { Calendar } from 'lucide-react';
import { clientConfig } from '@/config/client-config';

const StickyBookingButton = () => {
  const { booking } = clientConfig;

  return (
    <>
      <style>{`
        .sticky-booking-container {
          display: none;
        }

        @media (max-width: 767px) {
          .sticky-booking-container {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 16px;
            padding-bottom: calc(16px + env(safe-area-inset-bottom, 0px));
            background: linear-gradient(
              to bottom,
              transparent,
              rgba(255, 255, 255, 0.95) 30%
            );
            z-index: 999;
            pointer-events: none;
          }

          .sticky-booking-btn {
            pointer-events: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            height: 56px;
            padding: 16px 24px;
            background: #C9A87C;
            color: #FFFFFF;
            border: none;
            border-radius: 28px;
            font-family: 'Raleway', sans-serif;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            text-decoration: none;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: all 0.2s ease;
          }

          .sticky-booking-btn:hover,
          .sticky-booking-btn:active {
            background: #B8956A;
            box-shadow: 0 6px 16px rgba(201, 168, 124, 0.3);
            transform: translateY(-2px);
          }

          .sticky-booking-btn svg {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
          }
        }
      `}</style>

      <div className="sticky-booking-container">
        <a
          href={booking.url}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-booking-btn"
        >
          <Calendar />
          <span>{booking.buttonText || 'Réserver'}</span>
        </a>
      </div>
    </>
  );
};

export default StickyBookingButton;
