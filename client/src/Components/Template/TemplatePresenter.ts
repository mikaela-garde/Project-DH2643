import React, {useState} from 'react';
import TemplateView from "./TemplateView";

function TemplatePresenter (props) {
    const [isShown, setIsShown] = useState(false);
    const [colorChange, setColorChange] = useState(false);

    return React.createElement(TemplateView, {
      onToggle: () =>  setIsShown(current => !current),
      onColorChange: () => setColorChange(current => !current),
      isShown: isShown,
      colorChange: colorChange
    })
}


export default TemplatePresenter;