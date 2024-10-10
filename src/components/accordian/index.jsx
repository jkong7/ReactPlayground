// single selection accordian, everytime you select something, you open one at a time and everything else closes 
// multiple selection accordian
import React, {useState} from 'react'; 
import data from './data'; 
import './styles.css'

const Accordian = () => {
    const [selected, setSelected] = useState(null); 
    const [enableMultiSelection, setEnableMultiSelection] = useState(false); 
    const [multiple, setMultiple] = useState([]); 

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    const handleMultipleSelection = (getCurrentId) => {
        let copyMultiple = [...multiple]; 
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
        if (findIndexOfCurrentId===-1) copyMultiple.push(getCurrentId)
            else copyMultiple.splice(findIndexOfCurrentId, 1)
        setMultiple(copyMultiple)
    }

    return (
    <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="Accordian">
            {
                data && data.length>0 ? 
                data.map(dataItem=> <div className="item">
                    <div className="title" onClick={enableMultiSelection ? () => handleMultipleSelection(dataItem.id): () => handleSingleSelection(dataItem.id)}>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMultiSelection ? 
                        multiple.indexOf(dataItem.id) !==-1 && (
                            <div className="content">{dataItem.answer}</div>
                        )
                        : selected === dataItem.id && <div>{dataItem.answer}</div>
                    }

                </div>)
                : <div>No data found</div> 
            }
        </div>
    </div>
    )
}

export default Accordian; 