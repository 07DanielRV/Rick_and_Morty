import React from 'react';

const Page = ({page, setPage, quantyPage}) => {
    return (
        <div className='getPage'>
            {page > 1 && 
            <button className='btnPage' onClick={() => setPage(page - 1)}>
                Former
            </button>}
            <p>{page} - {quantyPage}</p>
            {quantyPage > page && 
            <button className='btnPage' onClick={() => setPage(page + 1)}>
                Next
            </button>}
        </div>
    );
};

export default Page;