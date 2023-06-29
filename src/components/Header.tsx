import { useContext } from "react"
import { Context } from "../context"
import { monthsEnum } from "../utils"

const Header = () => {
  const { filterMonth, setFilterMonth } = useContext(Context)

  return (
    <div className="bg-primary d-flex justify-content-around align-items-center rounded-3" style={{width: "90%"}}>
      <div onClick={() => setFilterMonth(filterMonth - 1)}>
        <h5 className="text-white">{monthsEnum[filterMonth - 1]}</h5>
      </div>
      <div>
        <h2 className="text-light">{monthsEnum[filterMonth]}</h2>
      </div>
      <div onClick={() => setFilterMonth(filterMonth + 1)}>
        <h5 className="text-white">{monthsEnum[filterMonth + 1]}</h5>
      </div>
    </div>
  )
}

export default Header