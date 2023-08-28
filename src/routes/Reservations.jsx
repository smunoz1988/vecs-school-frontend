import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from "../redux/slices/reservationsSlice";
import { useNavigate } from "react-router";
import formatDate from "../utils/formatDate";
import { 
  MdProductionQuantityLimits, 
  MdLocationCity 
} from 'react-icons/md';
import { BsCalendar2DateFill } from 'react-icons/bs';

const Reservations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservationsData = useSelector((state) => state.reservations.reservations);
  console.log(reservationsData);
  const token = localStorage.getItem('authToken');
  
  useEffect(() => {
    dispatch(fetchReservations(token));
  }, [dispatch, token]);

  return (
      <div className="flex flex_col ai_center table-container pad gap_2">
        <h2 className="title">MY RESERVATIONS</h2>
        <table className="table">
          <thead>
            <tr>
              <th><MdProductionQuantityLimits size={20} className="icon-white" /> COURSE NAME</th>
              <th><MdLocationCity size={20} className="icon-white" />CITY</th>
              <th><BsCalendar2DateFill size={18} className="icon-white" />DATE</th>
            </tr>
          </thead>
          <tbody>
          {reservationsData && reservationsData.length > 0 ? (
            reservationsData.map((reserve) => (
              <tr key={reserve.id}>
                <td>{reserve.course.name}</td>
                <td>{reserve.city}</td>
                <td>{formatDate(reserve.date)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                Reservations not found
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
  )
}

export default Reservations
