import charir from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../../assets/images/bg.png'

const AppointmentBanner = ({ date, setDate }) => {


    // const today = new Date();
    // const selectedDate = date;
    // if (selectedDate >= today) {

    //     console.log(`Today : ${today} & Date Select : ${selectedDate}`)
    // }

    return (
        <div className="hero py-12" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={charir} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        captionLayout="dropdown"
                        dateFormat="DD-MM-YYYY"
                        mode="single"
                        selected={(date, null)}
                        onSelect={setDate}
                    />

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;