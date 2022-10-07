import React, {useState} from 'react';
import DashboardView from "./DashboardView";

function DashboardPresenter (props) {
    const [isShown, setIsShown] = useState(false);
    const [colorChange, setColorChange] = useState(false);

    return React.createElement(DashboardView, {
      onToggle: () =>  setIsShown(current => !current),
      onColorChange: () => setColorChange(current => !current),
      isShown: isShown,
      colorChange: colorChange
    })
}


export default DashboardPresenter;