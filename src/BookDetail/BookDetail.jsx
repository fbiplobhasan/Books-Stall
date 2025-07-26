import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../Utils/Utilities';

const BookDetail = () => {
    const { bookId } = useParams()
    const data = useLoaderData()
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id)
    console.log(book);

    const { image, yearOfPublishing, publisher, author, review, totalPages, rating, bookName, category, tags } = book;


    const handleMarkAsRead = (id) => {


        addToStoredReadList(id)
    }

    const handleWishList = (id) => {
        addToStoredWishList(id)
    }


    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Book Detail: 
                {bookId}
            </h2>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Book Image */}
                <div className="lg:w-1/3 w-full">
                    <img className="w-full h-auto rounded-lg object-cover" src={image} alt={bookName} />
                </div>

                {/* Book Info */}
                <div className="lg:w-2/3 w-full text-start space-y-4">
                    <h1 className="text-4xl font-bold text-gray-800">{bookName}</h1>
                    <h2 className="text-xl text-gray-600 font-medium">by {author}</h2>

                    <div className="border-t-2 border-dashed my-4"></div>

                    <p className="text-sm text-gray-500 uppercase tracking-wide">{category}</p>

                    <div className="border-t-2 border-dashed my-4"></div>

                    <p className="text-gray-700">{review}</p>

                    {/* Tags */}
                    <ul className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <li key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{tag}</li>
                        ))}
                    </ul>

                    <div className="border-t-2 border-dashed my-4"></div>

                    {/* Other details */}
                    <p><span className="font-semibold">Pages:</span> {totalPages}</p>
                    <p><span className="font-semibold">Publisher:</span> {publisher}</p>
                    <p><span className="font-semibold">Published:</span> {yearOfPublishing}</p>
                    <p><span className="font-semibold">Rating:</span> {rating}</p>

                    {/* Buttons */}
                    <div className="pt-4">
                        <NavLink onClick={() => handleMarkAsRead(bookId)} className="btn btn-primary mr-3">Mark As Read</NavLink>
                        <NavLink onClick={() => handleWishList(bookId)} className="btn btn-outline">Wish List</NavLink>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BookDetail;