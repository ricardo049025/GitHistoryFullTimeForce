import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import './Home.css';

const customStyles = {
    headCells: {
      style: {
        fontWeight: 'bold',
        fontSize: '16px',
      },
    },
    rows: {
      style: {
        fontSize: '14px',
      },
    },
  };

const Home = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedCommits, setLoadedCommits] = useState();
    const columns = [
        {
            name: 'Author',
            selector: (row,i) => row.author,
            sortable: true,
        },
        {
            name: 'Commit Date',
            selector: (row,i) => row.date,
            sortable: true,
            cell: (row) => (
                <div>
                  {format(new Date(row.date), "yyyy-MM-dd kk:mm::ss aaaaa'm'")}
                </div>
              ),
            
        },
        {
            name: 'Message',
            selector: (row,i) => row.message,

        },
        {
            name: 'SHA',
            selector: (row,i) => row.sha,
            sortable: true,
        }
    ]
    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/github/commits');
                setLoadedCommits(responseData);
            } catch (error) {console.log(error);}
        }
        fetchCommits();
    },[sendRequest]);

    return (
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && <LoadingSpinner asOverLay/>}
        { !isLoading && loadedCommits && (
        <div class="container">
            
                <DataTable
                title="Commits History"
                columns={columns}
                data={loadedCommits}
                customStyles={customStyles}
                pagination
                highlightOnHover
                responsive
                />
        </div>)}
        </React.Fragment>
    )
}

export default Home;