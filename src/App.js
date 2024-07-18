// import CreationDrawer from './components/CreationDrawer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import CreationDrawer from './components/CreationDrawer';
import Filter from './components/Filter';
import ListContainer from './components/ListContainer';
import ProgressBox from './components/ProgressBox';

import './styles/main.scss';
import { addColors } from './store/slices/colorsSlice';

function App() {
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.list);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const handleAddCreationClick = () => {
        setIsDrawerVisible(!isDrawerVisible);
    };

    useEffect(() => {
        const getColors = async () => {
            try {
                const response = await axios('https://random-flat-colors.vercel.app/api/random?count=6');
                dispatch(addColors(response.data.colors));
            } catch (error) {
                console.log(error);
            }
        };
        getColors();
    }, []);
    return (
        <div className="App">
            <main>
                <section className="section-left">
                    <Filter />
                    <ProgressBox value={list.length / 5} />
                    <ListContainer
                        handleAddCreative={handleAddCreationClick}
                        isDrawerVisible={isDrawerVisible}
                    />
                </section>
                {isDrawerVisible && (
                    <section className={`drawer  ${isDrawerVisible ? 'drawer-open' : 'drawer-close'}`}>
                        <CreationDrawer handleCancelClick={setIsDrawerVisible} />
                    </section>
                )}
            </main>
        </div>
    );
}

export default App;
