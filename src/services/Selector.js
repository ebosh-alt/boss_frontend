import { IoIosArrowDown } from "react-icons/io";


function Selector({prefix, isOpen, setIsOpen, inputCategory, handleSelectCategory, options}) {
    return (
        <div className={prefix+"-block"}>
                <div className={prefix+"-custom-select"} onClick={() => setIsOpen(!isOpen)}>
                    <div className={prefix+"-select-header"}>
                        {inputCategory ? inputCategory.label : options[0].label}
                        <IoIosArrowDown className={prefix+"-open-arrow"}/>
                        {/* <img className={prefix+"-open-arrow"} src="./image copy.png"/> */}
                    </div>
                    {isOpen && (
                        <div className={prefix+"-options"}>
                            {options.map((option, index) => (
                                <>
                                    {/* {option.label != "Категория" && */}
                                    {index !=0  &&
                                    <>
                                        <li
                                            key={option.value}
                                            onClick={() => handleSelectCategory(option)}
                                            className={prefix+"-option"}
                                        >
                                            {option.label}
                                            {option.img &&
                                            <img className={prefix+"-img"} src={option.img ? option.img : "./image.png"} alt=""/>
                                            }
                                        </li>
                                    </>
                                    }
                                    {index!=0 && index!=options.length-1 && (<hr className={prefix+"-horizont-line"}/>)}
                                </>
                            ))}
                        </div>
                    )}
                </div>
            </div>
    )
}

export default Selector