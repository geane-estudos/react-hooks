import React from 'react'

const Callback = () => {
    const [call, setCall] = React.useState(0);

    const handleClick = React.useCallback(() => {
      setCall((call) => call + 1);
    }, []);
  
    return <button onClick={handleClick}>Callback{call}</button>;
  };

export default Callback
