import React from 'react'
import { useSelector } from 'react-redux'
import Button from './Button';

const ShowList = () => {
    const list = useSelector((state) => state.todo.list);
    return (
        <div>
            <ul>
                {list && list.map(({ id, text }) => {
                    return <li key={id}>{text}
                        <Button userId={id} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ShowList
