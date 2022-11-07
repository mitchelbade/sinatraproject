import { createContext } from 'react'

const ModelsContext = createContext(null);

const ModelsProvider = ({ children }) => {
    const [models, setModels] = useState([]);

    return <ModelsContext.Provider value={{ models, setModels }}>{ children }</ModelsContext.Provider>
}

export { ModelsContext, ModelsProvider }