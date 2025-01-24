import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Gallery from '../tour-detail/components/Gallery';
import Exlpore from '../tour-detail/components/Explore';
import PhnomPenhTour from '../tour-detail/components/PhnomPenhTour';
import BookingForm from '../tour-detail/components/BookingForm';
import CardRoomType from '../tour-detail/components/CardRoomType';
import Reviews from '../tour-detail/components/Reviews';
export default function PageTour() {
    return (
     <div>
        <Navbar />
        <Gallery />
        <Exlpore />
        <div className='flex justify-between mx-auto w-[1200px]'>
            <div className='w-[800px]'> 
                <PhnomPenhTour />
                <CardRoomType />
                <Reviews />
            </div>
            <div> 
                <BookingForm />
            </div>
        </div>
        <Footer />
     </div>
    );
  }
  
