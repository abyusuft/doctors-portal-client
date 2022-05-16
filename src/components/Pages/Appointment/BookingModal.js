import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm bg-secondary border-0 btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking For : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" value={format(date, "PP")} disabled class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Type Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Type Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" class="btn btn-primary w-full max-w-xs" />
                    </form>

                    {/* <div class="modal-action">
                        <label for="booking-modal" class="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default BookingModal;