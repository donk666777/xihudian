'use client';

import { useBooking } from './booking-context';

type BookingTriggerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function BookingTrigger({ children, className, id }: BookingTriggerProps) {
  const { open } = useBooking();
  return (
    <button className={className} id={id} type="button" onClick={open}>
      {children}
    </button>
  );
}
