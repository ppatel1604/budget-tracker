import { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { deleteData } from '../api/api';
import { ExpenseContext } from '../context/AppContext';
import { IExpenseItem } from '../interfaces/ExpenseItem';

const ExpenseItem = ({ id, name, cost }: IExpenseItem) => {
    const {
        dispatch: { deleteExpense },
    } = useContext(ExpenseContext);

    const onDeleteClick = async (id: string) => {
        try {
            const deleteResponse = await deleteData(id);
            console.log(deleteResponse);
            if (!deleteResponse) {
                deleteExpense(id);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {name}
            <div>
                <span className='badge bg-primary rounded-pill mr-3'>
                    ${cost}
                </span>
                <TiDelete
                    size='1.5em'
                    onClick={() => onDeleteClick(id)}
                ></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;
