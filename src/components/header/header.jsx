import s from "./header.module.scss"

import LocationInput from "../locationInput/locationInput"
import Filter from "../filter/filter"

const Header = () => {
    return ( 
        <header className={s.header}>
            <LocationInput/>
            <Filter/>
        </header> 
    )
}

export default Header