import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ItemMenu = ({tile, icon, url}) => {
    return (
        <Link to={url}>
            <div className='bg-green-600 p-4 rounded-xl flex flex-col gap-4 transition-all hover:bg-green-800 w-[150px] items-center'>
                <FontAwesomeIcon
                    className='text-white flex justify-center text-[50px]'
                    icon={icon}
                />
                <p className='text-white'>{tile}</p>
            </div>
        </Link>
    );
}

export default ItemMenu;
