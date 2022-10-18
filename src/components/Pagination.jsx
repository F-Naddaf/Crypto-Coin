import { Link } from 'react-router-dom';
import '../style/Pagination.css';

const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <Link
              onClick={() => {
                paginate(number);
                window.scroll(0, 600);
              }}
              to={`/${number}`}
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
