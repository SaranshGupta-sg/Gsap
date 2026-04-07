import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText); //this line make sure that both plugins are ready to use globally

const App = () => {
  return (
    <div className='flex-center'>
      App
    </div>
  )
}

export default App
