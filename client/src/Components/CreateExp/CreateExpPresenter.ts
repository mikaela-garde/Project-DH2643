import React, {useState} from 'react';
import CreateExpView from './CreateExpView';


function CreateExpPresenter (props) {
    const [startDate, setStartDate] = useState(new Date());
    return React.createElement(CreateExpView, {
        //onToggle: () =>  setStartDate({date}),
        startDate: startDate,
        onToggle: (date:Date) => setStartDate(date)
    })
}


export default CreateExpPresenter;