import React, { useState } from 'react';
import style from './Paginator.module.scss';

type Props = {
    totalItemsCount: number
    usersOnPage: number
    currentUsersPage: number
    portionSize?: number
    onPageChanged: (pageNumber:number) => void
}

const Paginator: React.FC<Props> = ({ totalItemsCount, usersOnPage, onPageChanged, currentUsersPage, portionSize = 10 }) => {
    let usersPagesCount = Math.ceil(totalItemsCount / usersOnPage);
    let pagesArr: Array<number> = [];

    for (let i = 1; i <= usersPagesCount; i++) {
        pagesArr.push(i);
    }

    let portionCount = Math.ceil(usersPagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={style.users__header}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}

            {pagesArr.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((page, i) => <span key={i} onClick={() => onPageChanged(page)}
                    className={`${currentUsersPage === page ? style.users__page_active : undefined} ${style.users__page}`}>{page}</span>)}

            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}

        </div>
    )
}

export default Paginator;