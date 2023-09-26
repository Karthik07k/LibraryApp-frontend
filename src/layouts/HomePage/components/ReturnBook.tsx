import { Link } from "react-router-dom";
import BookModel from "../../../models/BookModel";

export const ReturnBook: React.FC<{ book: BookModel }> = (props) => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="text-center">
                {
                    props.book.img ?
                        <img
                            src={props.book.img}
                            width='151'
                            height='233'
                            alt="Book"
                        />
                        :
                        <img
                            src={require('D:/main projects/react-projects/library-app/03-frontend/react-library/src/Images/BooksImages/book.png')}
                            width='151'
                            height='233'
                            alt="Book"
                        />
                }

                <h6 className="mt-2">{props.book.title}</h6>
                <p>{props.book.author}</p>
                <Link className="btn main-color text-white" to={`checkout/${props.book.id}`}>Reserve</Link>
            </div>
        </div>
    );
}