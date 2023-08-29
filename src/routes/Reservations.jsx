import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from "../redux/slices/reservationsSlice";
import formatDate from "../utils/formatDate";
import { 
  MdProductionQuantityLimits, 
  MdLocationCity 
} from 'react-icons/md';
import { BsCalendar2DateFill } from 'react-icons/bs';
import '../styles/tables.css';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservationsData = useSelector((state) => state.reservations.reservations);
  const token = localStorage.getItem('authToken');
  
  useEffect(() => {
    dispatch(fetchReservations(token));
  }, [dispatch, token]);

  return (
      <div className="tableContainer">
        <h2>MY RESERVATIONS</h2>
        <table className="tableReservations">
          <thead>
            <tr>
              <th><MdProductionQuantityLimits size={20} /> COURSE NAME</th>
              <th><MdLocationCity size={20} />CITY</th>
              <th><BsCalendar2DateFill size={18} />DATE</th>
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
