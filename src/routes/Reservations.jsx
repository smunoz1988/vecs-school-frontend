import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from "../redux/slices/reservationsSlice";
import { useNavigate } from "react-router";
import formatDate from "../utils/formatDate";

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
    <div>
      <p onClick={() => navigate('/courses')}>Back</p>
      <div className="flex flex_col ai_center table-container pad gap_2">
        <h2 className="title">MY RESERVATIONS</h2>
        <table className="table">
          <thead>
            <tr>
              <th>COURSE NAME</th>
              <th>CITY</th>
              <th>DATE</th>
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
    </div>
  )
}

export default Reservations
