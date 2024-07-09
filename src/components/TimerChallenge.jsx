import { useState ,useRef} from "react"
import ResultModal from "./ResultModal";
export default function TimerChallenge({title,targetTime})
{
  const timer=useRef();
  const dialog=useRef();
 const[remainingTime,setRemainingTime]=useState(targetTime*1000);
 const timerIsActive=remainingTime>0 && remainingTime <targetTime*1000;
 if(remainingTime<=0)
 {
  clearInterval(timer.current);
  dialog.current.open();
 }

 function handelRest()
 {
  setRemainingTime(targetTime*1000);
 }
function handelTimer()
{
 
  timer.current=  setInterval(()=>
    {
     setRemainingTime(prevTime=>prevTime-10);
    },0);
}

function handelStopTimer()
{
  clearInterval(timer.current);
  dialog.current.open();
}
  return <> 
   <ResultModal ref={dialog} targetTime={targetTime}  remainingTime={remainingTime} onStop={handelRest}/>
  <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">
      {targetTime} second{targetTime>1?'s':''}
    </p>
    <p>
      <button onClick={timerIsActive?handelStopTimer:handelTimer}>{timerIsActive?'Stop':'Start'} Challenge</button>
    </p>
    <p className={timerIsActive?'active':''}>
         {timerIsActive?'Time is running...':'Timer is not active'}
    </p>
  </section>
  </>
}