import s from "./param.module.scss"

import { UsersIcon, TransmissionIcon, PetrolIcon, KitchenIcon, BedIcon, ACParamIcon } from "../assets/params"

const ParamItem = ({text, type}) => {
    let Icon = null
    switch(type){
        case "users": Icon = UsersIcon; break;
        case "transmission": Icon = TransmissionIcon; break;
        case "petrol": Icon = PetrolIcon; break;
        case "kitchen": Icon = KitchenIcon; break;
        case "bed": Icon = BedIcon; break;
        case "ac": Icon = ACParamIcon; break;
        default: Icon = null
    }
    return (
        <li className={s.item}>
            <Icon/>
            <p className={s.item_text}>{text}</p>
        </li>
    )
}

export default ParamItem