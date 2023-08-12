import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

export default function Language() {
    return (
        <div className="flex container mt-5">
            <div className="ml-auto">
                <button className="flex rounded-full text-white bg-blue-600 hover:bg-blue-500 py-1 px-3 items-center gap-1">
                    <img alt="ru" src="./src/assets/languages/en_us.png" width={32} height={32} className="float-left" />
                    <div className="mr-1">
                        EN&nbsp;(US)
                    </div>
                    <FontAwesomeIcon icon={faCaretDown} className="ml-auto" />
                </button>
            </div>
        </div>
    )
}
