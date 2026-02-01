// Types for the booking system

export interface ServiceItem {
  name: string;
  duration: string;
  price: string;
  image: string;
  categoryName: string;
  categorySlug: string;
}

export interface ClientInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface BookingState {
  selectedServices: ServiceItem[];
  selectedDate: Date | null;
  selectedTime: string | null;
  clientInfo: ClientInfo;
  notes: string;
}

export const initialBookingState: BookingState = {
  selectedServices: [],
  selectedDate: null,
  selectedTime: null,
  clientInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  },
  notes: ''
};
