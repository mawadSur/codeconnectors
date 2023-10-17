import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index'; 
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Ourteam />
      <Featured />
    </main>
  )
}
