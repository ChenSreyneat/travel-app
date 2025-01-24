import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousal';
import SearchTour from './components/SearchTour';
import SearchLocation from '../page-tour/components/SearchLocation';
import TourList from '../page-tour/components/TourList';
import FilterSidebar from '../page-tour/components/FilterSidebar';
import Pagination from '../page-tour/components/Pagination';

export default function PageTour() {
    return (
      <div>
       <Navbar />
       <Carousel />
       <SearchTour />
       <div className='flex justify-between w-[1200px] mx-auto
       '>
       <div>
       <SearchLocation />
       <FilterSidebar /> 
       </div>
       
       <div>
       <TourList />
       <Pagination />
       </div>
       </div>
       
       <Footer />
  
      </div>
    );
  }
  