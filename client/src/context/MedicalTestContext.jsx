import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const MedicalTestContext = createContext();

export const useMedicalTests = () =>{
    return useContext(MedicalTestContext);
}

export const MedicalTestProvider = ({ children }) => {
    const [tests, setTests] = useState([]);

    const fetchTests = async () => {
        try {
            const response=await axios.get('http://localhost:5014/api/admin/alltest')
            console.log(response.data);
            setTests(response.data);
        } catch (error) {
            console.log('Error fetching medical tests:', error);
        }
    }

    const addTest = async (newTest) => {
        try {
            const respone=await axios.post('http://localhost:5014/api/admin/addtest',newTest);

            setTests((prevTests)=>[...prevTests,respone.data]);
            fetchTests();
        } catch (error) {
            console.log('Error adding new test:', error);
        }
    }

    const removeTest = async (testId) => {
        try {
            await axios.delete(`http://localhost:5014/api/admin/deletetest/${testId}`);
            setTests((prevTests)=>prevTests.filter((test) => test._id !== testId))
        } catch (error) {
            console.log('Error deleting test:', error);
        }
    }

    useEffect(()=>{
        fetchTests();
    },[]);

    return(
        <MedicalTestContext.Provider values={{ tests,addTest,removeTest}}>
            {children}
        </MedicalTestContext.Provider>
    )
}