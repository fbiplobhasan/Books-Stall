import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, author, category, tags, bookName, image } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-gray-100 shadow-sm">
                <figure className='bg-yellow-400 p-5 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[200px]'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title  flex justify-center">
                        {tags.map((tag, index) => <div key={index} className=" px-2 py-1 rounded-lg bg-green-100 badge-secondary">{tag}</div>)}
                    </h2>
                    <h1 className='flex justify-start text-4xl'>{bookName}</h1>
                    <p className='flex justify-start'>{author}</p>
                    <div className='border-2 border-dashed'></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">

                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="1 star" />
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="3 star" />
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="4 star" />
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="5 star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;