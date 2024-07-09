import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
const ResultModal= forwardRef(function ResultModal({targetTime,remainingTime,onStop},ref)
{
  const userLost=remainingTime <= 0;
  const formattedremainingTime=(remainingTime/1000).toFixed(2);
  const score=Math.round((1-remainingTime/(targetTime*1000))*100)
  const dialog=useRef();
  useImperativeHandle(ref,()=>{
    return {
   open()
   {
    dialog.current.showModal();
   }
    }
  });
return createPortal( 
<dialog ref={dialog} className="result-modal" onClose={onStop}>
  {userLost? <h2>You lost</h2>: <h2>Your score: {score}</h2>}
  <p>The target time was <strong>{targetTime} secons.</strong></p>
  <p>You stopped the timer with <strong>{formattedremainingTime} seconds left.</strong></p>
  <form method="dialog">
    <button onClick={onStop}>Close</button>
  </form>
</dialog>
,document.getElementById('modal'));
}) 
export default ResultModal;