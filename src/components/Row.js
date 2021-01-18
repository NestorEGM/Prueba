import '../style/Row.css';
import NumberFormat from 'react-number-format';

/*********************
  data = {
    subtitulo: valor
  }
**********************/

const Row = ({ data, circleColor = null }) => {
  const keys = Object.keys(data);
  return (
    <>
      <tr>
        <td>
          <div className="td-wrapper">
            <div className="circle-wrapper">
              {
                circleColor ? <div className="circle" style={{ backgroundColor: circleColor }} /> : null
              }
              <NumberFormat value={data[keys[0]]} displayType="text" thousandSeparator={true} prefix="$" />
            </div>
            <div className="line" />
          </div>
        </td>
        <td>
          <div className="td-wrapper">
            <div className="circle-wrapper">
              {
                circleColor ? <div className="circle" style={{ backgroundColor: circleColor }} /> : null
              }
              <NumberFormat value={data[keys[1]]} displayType="text" thousandSeparator={true} prefix="$" />
            </div>
            <div className="line" />
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <p>{keys[0]}</p>
        </td>
        <td>
          <p>{keys[1]}</p>
        </td>
      </tr>
    </>
  )
};

export default Row;