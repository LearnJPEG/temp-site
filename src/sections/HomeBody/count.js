const Count = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (<h1>Event Started</h1>);
  } else {
    // Render a countdown
    return( <><span className="count">{days}</span> Days <span  className="count">{hours}</span> Hours <span  className="count">{minutes}</span> Mins </>);
  }
};


export default Count